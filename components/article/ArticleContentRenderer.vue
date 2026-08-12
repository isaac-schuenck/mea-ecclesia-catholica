<template>
  <div :class="document.containerClass">
    <template v-for="(block, index) in document.blocks" :key="`${document.id}-${index}`">
      <ArticleSectionTitle
        v-if="block.type === 'section-title'"
        :text="$t(block.textKey)"
      />

      <ArticleSubheading
        v-else-if="block.type === 'subheading'"
        :id="block.id"
        :class="block.class"
        :compact="block.compact"
        :text="$t(block.textKey)"
      />

      <div v-else-if="block.type === 'image'" :class="block.class">
        <ImageFigure
          :src="block.src"
          :alt="block.altKey ? $t(block.altKey) : block.alt"
          :caption-key="block.captionKey"
          :image-class="block.imageClass"
        />
      </div>

      <component
        :is="block.type === 'quote' ? 'blockquote' : (block.tag || 'p')"
        v-else-if="block.type === 'text' || block.type === 'quote'"
        :class="block.class"
      >{{ $t(block.keypath) }}</component>

      <ArticleNote
        v-else-if="block.type === 'note'"
        :class="block.class"
      >
        <strong v-if="block.labelKey" class="not-italic text-gray-600">{{ $t(block.labelKey) }}</strong>
        {{ $t(block.keypath) }}
      </ArticleNote>

      <component
        :is="block.tag || 'div'"
        v-else-if="block.type === 'group'"
        :id="block.id"
        :class="block.class"
      >
        <ArticleContentRenderer
          :document="{ id: `${document.id}-${index}`, blocks: block.blocks }"
          :links="links"
        />
      </component>

      <ul v-else-if="block.type === 'list'" :class="block.class">
        <li
          v-for="(item, itemIndex) in $tm(block.keypath)"
          :key="`${block.itemKeyPrefix || block.keypath}-${itemIndex}`"
        >{{ $rt(item) }}</li>
      </ul>

      <RichText
        v-else
        :id="block.id"
        :keypath="block.keypath"
        :tag="block.tag || 'p'"
        :class="block.class"
        :links="{ ...links, ...block.links }"
        :formats="block.formats"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ArticleDocument } from "~/content/articleTypes";
import type { KeywordLink } from "~/config/keywordLinks";

defineProps<{
  document: ArticleDocument;
  links?: Record<string, KeywordLink>;
}>();
</script>
