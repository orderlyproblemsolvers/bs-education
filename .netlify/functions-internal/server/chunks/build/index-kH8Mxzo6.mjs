import { _ as __nuxt_component_0 } from './nuxt-link-BZ9eU4-B.mjs';
import { _ as __nuxt_component_1 } from './BlogEditor-8pgoBS1k.mjs';
import { mergeProps, unref, withCtx, createBlock, createTextVNode, openBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, u as useHead, f as useRouter } from './server.mjs';
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
import './useBlog-DLrcGbre.mjs';
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
    useHead({
      title: "Create Resource - Admin Dashboard",
      meta: [
        { name: "description", content: "Create and publish a new educational resource for The Covenant Academy." },
        { name: "robots", content: "noindex, nofollow" }
      ]
    });
    const router = useRouter();
    const handleSubmit = async (post) => {
      try {
        alert("Article created successfully!");
        await router.push(`/admin/resources/${post.id}`);
      } catch (error) {
        console.error("Error redirecting after creation:", error);
        alert("Article created but there was an error navigating to it.");
      }
    };
    const handleCancel = () => {
      if (confirm("Are you sure you want to cancel? Any unsaved changes will be lost.")) {
        router.push("/admin/resources");
      }
    };
    const handleDraftSave = (post) => {
      console.log("Draft saved:", post);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_BlogEditor = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#f4f5f3]" }, _attrs))} data-v-7ff52e68><div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-v-7ff52e68><div class="mb-8" data-v-7ff52e68><div class="flex items-center mb-6" data-v-7ff52e68>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        onClick: ($event) => unref(router).back(),
        class: "inline-flex items-center text-[#ACBEA3] hover:text-[#6b7a6a] transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-7ff52e68${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" data-v-7ff52e68${_scopeId}></path></svg> Back to Resources `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-5 h-5 mr-2",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "1.5",
                  d: "M15 19l-7-7 7-7"
                })
              ])),
              createTextVNode(" Back to Resources ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-white rounded-xl shadow border border-gray-200 p-8" data-v-7ff52e68><div class="flex items-start justify-between" data-v-7ff52e68><div class="flex-1" data-v-7ff52e68><div class="inline-flex items-center space-x-3 mb-4" data-v-7ff52e68><div class="w-3 h-3 bg-[#EB6534] rounded-full" data-v-7ff52e68></div><span class="text-xs font-semibold text-gray-500 tracking-wide uppercase" data-v-7ff52e68> New Resource </span></div><h1 class="text-3xl md:text-4xl font-bold text-[#333333] tracking-tight mb-3" data-v-7ff52e68> Create New Article </h1><p class="text-gray-600 font-medium max-w-2xl" data-v-7ff52e68> Share your thoughts and ideas with the school community. Create engaging content that informs and inspires. </p></div><div class="hidden lg:block ml-8" data-v-7ff52e68><div class="w-64 bg-[#f8f9f8] rounded-lg p-6" data-v-7ff52e68><h3 class="text-sm font-semibold text-[#333333] mb-4 flex items-center" data-v-7ff52e68><div class="w-5 h-5 bg-[#ACBEA3]/10 rounded mr-2 flex items-center justify-center" data-v-7ff52e68><svg class="w-3 h-3 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-7ff52e68><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-7ff52e68></path></svg></div> Writing Tips </h3><ul class="space-y-2 text-sm text-gray-600" data-v-7ff52e68><li class="flex items-start" data-v-7ff52e68><div class="w-1.5 h-1.5 bg-[#EB6534] rounded-full mt-2 mr-2 flex-shrink-0" data-v-7ff52e68></div> Use clear, engaging headlines </li><li class="flex items-start" data-v-7ff52e68><div class="w-1.5 h-1.5 bg-[#EB6534] rounded-full mt-2 mr-2 flex-shrink-0" data-v-7ff52e68></div> Add relevant images </li><li class="flex items-start" data-v-7ff52e68><div class="w-1.5 h-1.5 bg-[#EB6534] rounded-full mt-2 mr-2 flex-shrink-0" data-v-7ff52e68></div> Keep paragraphs concise </li><li class="flex items-start" data-v-7ff52e68><div class="w-1.5 h-1.5 bg-[#EB6534] rounded-full mt-2 mr-2 flex-shrink-0" data-v-7ff52e68></div> Preview before publishing </li></ul></div></div></div></div></div><div class="bg-white rounded-xl shadow border border-gray-200 overflow-hidden" data-v-7ff52e68><div class="border-b border-gray-200 px-8 py-6" data-v-7ff52e68><div class="flex items-center justify-between" data-v-7ff52e68><div class="flex items-center space-x-4" data-v-7ff52e68><div class="w-10 h-10 bg-[#ACBEA3]/10 rounded-lg flex items-center justify-center" data-v-7ff52e68><svg class="w-5 h-5 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-7ff52e68><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-v-7ff52e68></path></svg></div><div data-v-7ff52e68><h2 class="text-lg font-semibold text-[#333333]" data-v-7ff52e68>Article Editor</h2><p class="text-sm text-gray-600" data-v-7ff52e68>Create and format your content</p></div></div><div class="flex items-center space-x-2" data-v-7ff52e68><div class="w-2 h-2 bg-gray-400 rounded-full" data-v-7ff52e68></div><span class="text-xs text-gray-500" data-v-7ff52e68>Not saved</span></div></div></div><div class="p-8" data-v-7ff52e68>`);
      _push(ssrRenderComponent(_component_BlogEditor, {
        onSubmit: handleSubmit,
        onCancel: handleCancel,
        onDraftSave: handleDraftSave
      }, null, _parent));
      _push(`</div></div><div class="mt-8 bg-white rounded-xl shadow border border-gray-200 p-8 lg:hidden" data-v-7ff52e68><h3 class="text-lg font-semibold text-[#333333] mb-6 flex items-center" data-v-7ff52e68><div class="w-6 h-6 bg-[#ACBEA3]/10 rounded mr-3 flex items-center justify-center" data-v-7ff52e68><svg class="w-4 h-4 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-7ff52e68><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-7ff52e68></path></svg></div> Writing Guidelines </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-7ff52e68><div data-v-7ff52e68><h4 class="font-medium text-[#333333] mb-3" data-v-7ff52e68>Content Tips</h4><ul class="space-y-2 text-sm text-gray-600" data-v-7ff52e68><li class="flex items-start" data-v-7ff52e68><div class="w-1.5 h-1.5 bg-[#EB6534] rounded-full mt-2 mr-3 flex-shrink-0" data-v-7ff52e68></div> Write compelling headlines that grab attention </li><li class="flex items-start" data-v-7ff52e68><div class="w-1.5 h-1.5 bg-[#EB6534] rounded-full mt-2 mr-3 flex-shrink-0" data-v-7ff52e68></div> Use subheadings to break up long content </li><li class="flex items-start" data-v-7ff52e68><div class="w-1.5 h-1.5 bg-[#EB6534] rounded-full mt-2 mr-3 flex-shrink-0" data-v-7ff52e68></div> Include relevant images and media </li></ul></div><div data-v-7ff52e68><h4 class="font-medium text-[#333333] mb-3" data-v-7ff52e68>Publishing</h4><ul class="space-y-2 text-sm text-gray-600" data-v-7ff52e68><li class="flex items-start" data-v-7ff52e68><div class="w-1.5 h-1.5 bg-[#ACBEA3] rounded-full mt-2 mr-3 flex-shrink-0" data-v-7ff52e68></div> Save drafts frequently as you work </li><li class="flex items-start" data-v-7ff52e68><div class="w-1.5 h-1.5 bg-[#ACBEA3] rounded-full mt-2 mr-3 flex-shrink-0" data-v-7ff52e68></div> Preview your article before publishing </li><li class="flex items-start" data-v-7ff52e68><div class="w-1.5 h-1.5 bg-[#ACBEA3] rounded-full mt-2 mr-3 flex-shrink-0" data-v-7ff52e68></div> Add tags and categories for better organization </li></ul></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/resources/create/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7ff52e68"]]);

export { index as default };
//# sourceMappingURL=index-kH8Mxzo6.mjs.map
