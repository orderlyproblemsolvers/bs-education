import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseClient();
    const brochures = ref([]);
    const title = ref("");
    ref(null);
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto px-6 lg:px-8 py-10" }, _attrs))}><h1 class="text-3xl font-bold text-[#333333] mb-8"> Manage Brochures </h1><div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-10"><form class="space-y-5"><input${ssrRenderAttr("value", title.value)} type="text" placeholder="Brochure Title" class="w-full border border-gray-200 rounded-lg p-3 text-gray-700 focus:outline-none focus:border-[#ACBEA3] focus:ring-1 focus:ring-[#ACBEA3]"><input type="file" class="w-full border border-gray-200 rounded-lg p-3 text-gray-700 focus:outline-none focus:border-[#ACBEA3] focus:ring-1 focus:ring-[#ACBEA3]"><div><button type="submit" class="px-6 py-3 border-2 border-[#859484] text-[#859484] font-medium rounded-lg transition-all duration-200 hover:bg-[#859484] hover:text-white disabled:opacity-50"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""}>${ssrInterpolate(loading.value ? "Uploading..." : "Upload Brochure")}</button></div></form></div>`);
      if (brochures.value.length === 0) {
        _push(`<div class="text-gray-600 text-center py-12 bg-white border border-gray-200 rounded-xl"> No brochures uploaded yet. </div>`);
      } else {
        _push(`<div class="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm"><table class="w-full text-left"><thead class="bg-[#f4f5f3] text-gray-700"><tr><th class="p-4 font-medium">Title</th><th class="p-4 font-medium">File</th><th class="p-4 font-medium">Actions</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(brochures.value, (b) => {
          _push(`<tr class="border-t border-gray-100 hover:bg-[#859484]/5 transition-colors"><td class="p-4 text-gray-900">${ssrInterpolate(b.title)}</td><td class="p-4"><a${ssrRenderAttr("href", b.file_url)} target="_blank" rel="noopener" class="text-[#EB6534] font-medium hover:underline"> Open </a></td><td class="p-4"><button class="text-red-600 hover:text-red-700 font-medium"> Delete </button></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/brochures/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CgmmxZCW.mjs.map
