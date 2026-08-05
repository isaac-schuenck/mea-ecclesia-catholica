<script>
import { defineComponent, h, resolveComponent } from "vue";

export default defineComponent({
  name: "SaintParagraph",
  props: {
    paragraph: { type: String, required: true },
    links: { type: Object, default: () => ({}) },
  },
  setup(props) {
    const AppLink = resolveComponent("AppLink");

    return () => {
      // As chaves entre chaves, tipo {São Pedro}, viram links somente quando
      // a biografia realmente trouxe um destino para elas.
      const parts = props.paragraph.split(/(\{[^}]+\})/g).filter(Boolean);
      const content = parts.map((part) => {
        const match = part.match(/^\{([^}]+)\}$/);
        if (!match) return part;

        const link = props.links?.[match[1]];
        if (!link) return part;

        const classes =
          "text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors";

        if (/^https?:\/\//.test(link.to)) {
          return h(
            "a",
            {
              href: link.to,
              target: "_blank",
              rel: "noopener noreferrer",
              class: classes,
            },
            link.texto,
          );
        }

        return h(AppLink, { to: link.to, class: classes }, () => link.texto);
      });

      return h("p", content);
    };
  },
});
</script>
