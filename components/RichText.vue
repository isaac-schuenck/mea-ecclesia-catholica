<script>
import { Translation, useI18n } from "vue-i18n";
import { defineComponent, h, resolveComponent } from "vue";
import { keywordLinks } from "~/config/keywordLinks";
import { inlineFormats } from "~/config/inlineFormats";

export default defineComponent({
  name: "RichText",
  inheritAttrs: false,
  props: {
    keypath: { type: String, required: true },
    tag: { type: String, default: "p" },
    links: { type: Object, default: () => ({}) },
    formats: { type: Object, default: () => ({}) },
  },
  setup(props, { attrs }) {
    const { t } = useI18n();
    const AppLink = resolveComponent("AppLink");

    return () => {
      // Uma página pode substituir somente um destino excepcional sem copiar o
      // catálogo inteiro. Isso mantém o padrão central sem engessar o conteúdo.
      const resolvedLinks = { ...keywordLinks, ...props.links };
      const linkSlots = Object.fromEntries(
        Object.entries(resolvedLinks).map(([slot, link]) => [
          slot,
          () => {
            const content = () =>
              link.text || t(link.translationKey || `palavras_chave.${slot}`);
            const classes =
              `text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200 ${link.class || ""}`;

            if (link.external) {
              return h(
                "a",
                {
                  href: link.to,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  class: classes,
                },
                content,
              );
            }

            return h(AppLink, { to: link.to, class: classes }, content);
          },
        ]),
      );

      const resolvedFormats = { ...inlineFormats, ...props.formats };
      const formatSlots = Object.fromEntries(
        Object.entries(resolvedFormats).map(([slot, format]) => [
          slot,
          () =>
            h(
              format.tag || "span",
              { class: format.class },
              format.text || t(format.translationKey || `palavras_chave.${slot}`),
            ),
        ]),
      );

      return h(
        Translation,
        { keypath: props.keypath, tag: props.tag, ...attrs },
        // Um formato local pode vencer um link global quando aquele termo deve
        // aparecer apenas como texto neste contexto específico.
        { ...linkSlots, ...formatSlots },
      );
    };
  },
});
</script>
