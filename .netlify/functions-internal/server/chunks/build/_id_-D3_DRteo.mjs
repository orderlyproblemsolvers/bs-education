import { _ as __nuxt_component_0 } from './nuxt-link-BZ9eU4-B.mjs';
import { _ as __nuxt_component_1 } from './BlogEditor-8pgoBS1k.mjs';
import { ref, mergeProps, unref, withCtx, createBlock, createTextVNode, openBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, e as useRoute, f as useRouter, u as useHead } from './server.mjs';
import { u as useBlog } from './useBlog-DLrcGbre.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    useBlog();
    const post = ref(null);
    const loading = ref(true);
    const error = ref(null);
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const handleSubmit = (updatedPost) => {
      alert("Blog post updated successfully!");
      router.push(`/admin/resources/${updatedPost.id}`);
    };
    const handleCancel = () => {
      if (confirm("Are you sure you want to cancel? Any unsaved changes will be lost.")) {
        router.push(`/admin/resources/${route.params.id}`);
      }
    };
    const handleDraftSave = (post2) => {
      console.log("Draft saved:", post2);
    };
    useHead({
      title: "Edit Resource - Admin Dashboard",
      meta: [
        { name: "description", content: "Edit and update educational resources for The Covenant Academy." },
        { name: "robots", content: "noindex, nofollow" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_BlogEditor = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#f4f5f3]" }, _attrs))} data-v-3e6792f3>`);
      if (unref(loading)) {
        _push(`<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-v-3e6792f3><div class="text-center space-y-6" data-v-3e6792f3><div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ACBEA3]" data-v-3e6792f3></div><p class="text-gray-600 font-medium" data-v-3e6792f3>Loading resource...</p></div></div>`);
      } else if (unref(error)) {
        _push(`<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-v-3e6792f3><div class="bg-white rounded-xl shadow border border-gray-200 p-12 text-center" data-v-3e6792f3><div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6" data-v-3e6792f3><svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3e6792f3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-3e6792f3></path></svg></div><h3 class="text-xl font-semibold text-[#333333] mb-3" data-v-3e6792f3>Resource Not Found</h3><p class="text-gray-600 mb-8 max-w-md mx-auto" data-v-3e6792f3>${ssrInterpolate(unref(error))}</p><div class="flex flex-col sm:flex-row gap-4 justify-center" data-v-3e6792f3>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/admin/resources",
          class: "inline-flex items-center justify-center px-6 py-3 bg-[#ACBEA3] text-white text-sm font-medium rounded-lg hover:bg-[#6b7a6a] transition-all duration-200 shadow-sm hover:shadow-md"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3e6792f3${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" data-v-3e6792f3${_scopeId}></path></svg> Back to Resources `);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "w-4 h-4 mr-2",
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
        _push(`<button class="inline-flex items-center justify-center px-6 py-3 bg-[#EB6534] text-white text-sm font-medium rounded-lg hover:bg-[#c16a3d] transition-all duration-200 shadow-sm hover:shadow-md" data-v-3e6792f3><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3e6792f3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" data-v-3e6792f3></path></svg> Try Again </button></div></div></div>`);
      } else {
        _push(`<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-v-3e6792f3><div class="mb-8" data-v-3e6792f3><div class="flex items-center mb-6" data-v-3e6792f3>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#",
          onClick: ($event) => unref(router).back(),
          class: "inline-flex items-center text-[#ACBEA3] hover:text-[#6b7a6a] transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3e6792f3${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" data-v-3e6792f3${_scopeId}></path></svg> Back to Resources `);
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
        _push(`</div><div class="bg-white rounded-xl shadow border border-gray-200 p-8" data-v-3e6792f3><div class="flex items-start justify-between" data-v-3e6792f3><div class="flex-1" data-v-3e6792f3><div class="inline-flex items-center space-x-3 mb-4" data-v-3e6792f3><div class="w-3 h-3 bg-[#EB6534] rounded-full" data-v-3e6792f3></div><span class="text-xs font-semibold text-gray-500 tracking-wide uppercase" data-v-3e6792f3> Edit Resource </span></div><h1 class="text-3xl md:text-4xl font-bold text-[#333333] tracking-tight mb-3" data-v-3e6792f3> Edit Article </h1><p class="text-gray-600 font-medium max-w-2xl" data-v-3e6792f3> Make changes to your article content, update information, and improve your resource. </p>`);
        if (unref(post)) {
          _push(`<div class="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-600" data-v-3e6792f3><div class="flex items-center" data-v-3e6792f3><div class="w-8 h-8 bg-[#ACBEA3]/10 rounded-full flex items-center justify-center mr-3" data-v-3e6792f3><svg class="w-4 h-4 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3e6792f3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-v-3e6792f3></path></svg></div><span class="font-medium" data-v-3e6792f3>${ssrInterpolate(unref(post).author)}</span></div><div class="flex items-center" data-v-3e6792f3><div class="w-8 h-8 bg-[#ACBEA3]/10 rounded-full flex items-center justify-center mr-3" data-v-3e6792f3><svg class="w-4 h-4 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3e6792f3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-3e6792f3></path></svg></div><span data-v-3e6792f3>Created ${ssrInterpolate(formatDate(unref(post).created_at))}</span></div>`);
          if (unref(post).updated_at !== unref(post).created_at) {
            _push(`<div class="flex items-center" data-v-3e6792f3><div class="w-8 h-8 bg-[#EB6534]/10 rounded-full flex items-center justify-center mr-3" data-v-3e6792f3><svg class="w-4 h-4 text-[#EB6534]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3e6792f3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" data-v-3e6792f3></path></svg></div><span data-v-3e6792f3>Last updated ${ssrInterpolate(formatDate(unref(post).updated_at))}</span></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(post)) {
          _push(`<div class="hidden lg:block ml-8" data-v-3e6792f3><div class="bg-[#f8f9f8] rounded-lg p-6 min-w-[200px]" data-v-3e6792f3><h3 class="text-sm font-semibold text-[#333333] mb-4 flex items-center" data-v-3e6792f3><div class="w-5 h-5 bg-[#ACBEA3]/10 rounded mr-2 flex items-center justify-center" data-v-3e6792f3><svg class="w-3 h-3 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3e6792f3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-3e6792f3></path></svg></div> Article Status </h3><div class="space-y-3" data-v-3e6792f3><div class="flex items-center justify-between" data-v-3e6792f3><span class="text-sm text-gray-600" data-v-3e6792f3>Status</span><span class="${ssrRenderClass([unref(post).status === "published" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800", "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"])}" data-v-3e6792f3>${ssrInterpolate(unref(post).status)}</span></div><div class="flex items-center justify-between" data-v-3e6792f3><span class="text-sm text-gray-600" data-v-3e6792f3>ID</span><span class="text-xs text-gray-500 font-mono" data-v-3e6792f3>${ssrInterpolate(unref(post).id)}</span></div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><div class="bg-white rounded-xl shadow border border-gray-200 overflow-hidden" data-v-3e6792f3><div class="border-b border-gray-200 px-8 py-6" data-v-3e6792f3><div class="flex items-center justify-between" data-v-3e6792f3><div class="flex items-center space-x-4" data-v-3e6792f3><div class="w-10 h-10 bg-[#ACBEA3]/10 rounded-lg flex items-center justify-center" data-v-3e6792f3><svg class="w-5 h-5 text-[#ACBEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3e6792f3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-v-3e6792f3></path></svg></div><div data-v-3e6792f3><h2 class="text-lg font-semibold text-[#333333]" data-v-3e6792f3>Article Editor</h2><p class="text-sm text-gray-600" data-v-3e6792f3>Edit and update your content</p></div></div><div class="flex items-center space-x-3" data-v-3e6792f3>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/admin/resources/${unref(route).params.id}`,
          class: "inline-flex items-center px-4 py-2 text-sm font-medium text-[#ACBEA3] border border-[#ACBEA3] rounded-lg hover:bg-[#ACBEA3] hover:text-white transition-all duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3e6792f3${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" data-v-3e6792f3${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-3e6792f3${_scopeId}></path></svg> Preview `);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "w-4 h-4 mr-2",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "1.5",
                    d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  }),
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "1.5",
                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  })
                ])),
                createTextVNode(" Preview ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div><div class="p-8" data-v-3e6792f3>`);
        _push(ssrRenderComponent(_component_BlogEditor, {
          "initial-data": unref(post),
          onSubmit: handleSubmit,
          onCancel: handleCancel,
          onDraftSave: handleDraftSave
        }, null, _parent));
        _push(`</div></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/resources/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3e6792f3"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-D3_DRteo.mjs.map
