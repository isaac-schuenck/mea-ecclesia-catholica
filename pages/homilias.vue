<template>
  <main class="min-h-screen bg-[#FFF9EA] pt-12 pb-12 font-sans">
    
    <section class="max-w-7xl mx-auto px-4 md:px-6 mb-6">
      <div class="flex items-center justify-between bg-white border border-[#D4AF37]/30 rounded-full px-4 py-2 shadow-sm max-w-md mx-auto">
        <button @click="mudarDia(-1)" class="p-2 text-[#041122] hover:text-[#D4AF37] transition">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
        </button>

        <div class="relative flex items-center justify-center flex-1 cursor-pointer group" @click="abrirCalendario">
          <input 
            ref="inputData"
            type="date" 
            v-model="dataSelecionada"
            class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          <span class="text-[#041122] font-serif font-bold text-lg group-hover:text-[#D4AF37] transition">
            {{ formatarData(dataSelecionada) }}
          </span>
        </div>

        <button @click="mudarDia(1)" class="p-2 text-[#041122] hover:text-[#D4AF37] transition">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch">
        
        <div class="w-full lg:w-2/3 flex flex-col">
          <div class="aspect-video bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-[#041122]/10">
            <iframe 
              v-if="dadosDoDia.video_id"
              class="w-full h-full" 
              :src="`https://www.youtube.com/embed/${dadosDoDia.video_id}`" 
              title="Homilia do Dia" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
            <div v-else class="w-full h-full flex items-center justify-center text-gray-400 font-serif">
              Vídeo não disponível para esta data.
            </div>
          </div>
          
          <div class="mt-3 px-1" v-if="dadosDoDia.video_id">
            <h1 class="text-lg md:text-xl font-bold text-[#041122] truncate" :title="dadosDoDia.titulo_video">
              {{ dadosDoDia.titulo_video }}
            </h1>
          </div>
          </div>

        <div class="w-full lg:w-1/3 bg-[#041122] rounded-xl shadow-lg border border-[#D4AF37]/20 flex flex-col overflow-hidden h-[400px] lg:h-auto">
          
          <div class="flex border-b border-white/10 overflow-x-auto hide-scrollbar flex-shrink-0">
            <button 
              @click="abaAtiva = 'primeira'" 
              class="flex-1 py-4 px-2 text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap"
              :class="abaAtiva === 'primeira' ? 'text-[#D4AF37] border-[#D4AF37]' : 'text-gray-400 border-transparent hover:text-gray-200'"
            >
              1ª Leitura
            </button>
            <button 
              @click="abaAtiva = 'salmo'" 
              class="flex-1 py-4 px-2 text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap"
              :class="abaAtiva === 'salmo' ? 'text-[#D4AF37] border-[#D4AF37]' : 'text-gray-400 border-transparent hover:text-gray-200'"
            >
              Salmos
            </button>
            <button 
              v-if="dadosDoDia.segunda_leitura"
              @click="abaAtiva = 'segunda'" 
              class="flex-1 py-4 px-2 text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap"
              :class="abaAtiva === 'segunda' ? 'text-[#D4AF37] border-[#D4AF37]' : 'text-gray-400 border-transparent hover:text-gray-200'"
            >
              2ª Leitura
            </button>
            <button 
              @click="abaAtiva = 'evangelho'" 
              class="flex-1 py-4 px-2 text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap"
              :class="abaAtiva === 'evangelho' ? 'text-[#D4AF37] border-[#D4AF37]' : 'text-gray-400 border-transparent hover:text-gray-200'"
            >
              Evangelho
            </button>
          </div>

          <div class="flex-1 overflow-y-auto p-5 text-gray-200 text-justify leading-relaxed custom-scrollbar">
            
            <div v-show="abaAtiva === 'primeira'" class="animate-in fade-in duration-300">
              <h3 class="text-base md:text-lg font-serif text-[#D4AF37] mb-3">{{ dadosDoDia.primeira_leitura?.titulo }}</h3>
              <div class="text-sm md:text-base" v-html="dadosDoDia.primeira_leitura?.texto"></div>
            </div>

            <div v-show="abaAtiva === 'salmo'" class="animate-in fade-in duration-300">
              <h3 class="text-base md:text-lg font-serif text-[#D4AF37] mb-3">{{ dadosDoDia.salmo?.titulo }}</h3>
              <div class="text-sm md:text-base" v-html="dadosDoDia.salmo?.texto"></div>
            </div>

            <div v-show="abaAtiva === 'segunda'" class="animate-in fade-in duration-300">
              <h3 class="text-base md:text-lg font-serif text-[#D4AF37] mb-3">{{ dadosDoDia.segunda_leitura?.titulo }}</h3>
              <div class="text-sm md:text-base" v-html="dadosDoDia.segunda_leitura?.texto"></div>
            </div>

            <div v-show="abaAtiva === 'evangelho'" class="animate-in fade-in duration-300">
              <h3 class="text-base md:text-lg font-serif text-[#D4AF37] mb-3">{{ dadosDoDia.evangelho?.titulo }}</h3>
              <div class="text-sm md:text-base" v-html="dadosDoDia.evangelho?.texto"></div>
            </div>

          </div>
        </div>

      </div>
    </section>

  </main>
</template>

<script setup>
import { ref, watch } from 'vue';

const hoje = new Date().toISOString().split('T')[0];
const dataSelecionada = ref(hoje);
const abaAtiva = ref('primeira');
const inputData = ref(null);

// Força o navegador a abrir a caixinha do calendário
const abrirCalendario = () => {
  if (inputData.value && typeof inputData.value.showPicker === 'function') {
    inputData.value.showPicker();
  }
};

const formatarData = (dataStr) => {
  const [ano, mes, dia] = dataStr.split('-');
  const dataObjeto = new Date(ano, mes - 1, dia);
  const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const diaSemana = diasDaSemana[dataObjeto.getDay()];
  return `${dia}/${mes}/${ano.substring(2)} - ${diaSemana}`;
};

const mudarDia = (dias) => {
  const atual = new Date(dataSelecionada.value);
  atual.setDate(atual.getDate() + dias);
  dataSelecionada.value = atual.toISOString().split('T')[0];
};

const dadosDoDia = ref({});

const buscarHomiliaDaData = (data) => {
  if (data === '2026-06-15') {
    dadosDoDia.value = {
      video_id: "dQw4w9WgXcQ",
      titulo_video: "Homilia Diária | Segunda-feira - 11ª Semana do Tempo Comum - (Mt 5,38-42)",
      primeira_leitura: {
        titulo: "Primeiro Livro dos Reis (1Rs 21,1-16)",
        texto: "<p>Naqueles dias: 1 Nabot de Jezrael tinha uma vinha em Jezrael... <br><br> Palavra do Senhor. <br> <strong>- Graças a Deus.</strong></p>"
      },
      salmo: {
        titulo: "Salmo 5",
        texto: "<p><strong>Atendei o meu gemido, ó Senhor!</strong> <br><br> Escutai, ó Senhor Deus, minhas palavras...</p>"
      },
      segunda_leitura: null, 
      evangelho: {
        titulo: "Evangelho de Jesus Cristo segundo Mateus (Mt 5,38-42)",
        texto: "<p>Naquele tempo, disse Jesus aos seus discípulos: 'Ouvistes o que foi dito: Olho por olho...'</p>"
      }
    };
  } else {
    dadosDoDia.value = {
      video_id: "T7a_1Vw-j1I",
      titulo_video: "Homilia Diária | Outro Dia",
      primeira_leitura: { titulo: "Primeira Leitura", texto: "..." },
      salmo: { titulo: "Salmo", texto: "..." },
      segunda_leitura: null,
      evangelho: { titulo: "Evangelho", texto: "..." }
    };
  }
};

buscarHomiliaDaData(dataSelecionada.value);

watch(dataSelecionada, (novaData) => {
  buscarHomiliaDaData(novaData);
  abaAtiva.value = 'primeira';
});
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

/* Deixa a barra de rolagem do texto fininha e elegante no PC */
.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); border-radius: 10px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(212, 175, 55, 0.5); border-radius: 10px; }
.custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(212, 175, 55, 0.8); }
</style>