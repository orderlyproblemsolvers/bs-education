import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { d as useSupabaseClient } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'vue-router';
import '@supabase/ssr';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {
  __name: "brochures",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseClient();
    const brochures = ref([]);
    const loading = ref(true);
    function formatDate(dt) {
      if (!dt) return "";
      const d = new Date(dt);
      return d.toLocaleDateString() + " " + d.toLocaleTimeString();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 px-6 md:px-12 lg:px-24 bg-[#f4f5f3]" }, _attrs))}><div class="max-w-4xl mx-auto"><h1 class="text-3xl sm:text-4xl font-bold text-[#859484] mb-8 text-center"> Download Our Brochures </h1>`);
      if (loading.value) {
        _push(`<div class="text-gray-600 text-center animate-pulse py-12"> Loading brochures... </div>`);
      } else if (brochures.value.length === 0) {
        _push(`<div class="text-gray-600 text-center py-12"> No brochures available yet. </div>`);
      } else {
        _push(`<ul class="grid gap-6 sm:grid-cols-2"><!--[-->`);
        ssrRenderList(brochures.value, (b) => {
          _push(`<li class="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"><div class="p-6 flex-1 flex flex-col justify-between"><div><h2 class="text-lg font-semibold text-[#859484] mb-1">${ssrInterpolate(b.title)}</h2><p class="text-sm text-gray-500">${ssrInterpolate(formatDate(b.created_at))}</p></div><div class="mt-4"><a${ssrRenderAttr("href", b.file_url)} target="_blank" rel="noopener" class="block w-full text-center px-6 py-3 border-2 border-[#859484] text-[#859484] font-medium rounded-lg transition-all duration-200 hover:bg-[#859484] hover:text-white"> Download </a></div></div></li>`);
        });
        _push(`<!--]--></ul>`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources/brochures.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=brochures-BjB7h0kE.mjs.map
