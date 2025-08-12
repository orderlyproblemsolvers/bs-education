import { _ as __nuxt_component_0 } from './nuxt-link-BZ9eU4-B.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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
import './server.mjs';
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
    const cards = [
      {
        title: "Manage Blog Posts",
        description: "Create and edit blog posts",
        to: "/admin/resources",
        icon: "📝",
        color: "bg-indigo-500"
      },
      {
        title: "Manage Events",
        description: "Add and update upcoming events",
        to: "/admin/events",
        icon: "📅",
        color: "bg-blue-500"
      },
      {
        title: "Manage Inquiries",
        description: "View and respond to messages",
        to: "/admin/enquiries",
        icon: "📨",
        color: "bg-yellow-500"
      },
      {
        title: "Manage Brochures",
        description: "Upload and organize brochures",
        to: "/admin/brochures",
        icon: "📄",
        color: "bg-green-500"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 px-6 md:px-12 lg:px-24 bg-[#f4f5f3] min-h-screen" }, _attrs))}><div class="max-w-6xl mx-auto"><header class="mb-12 text-center"><h1 class="text-3xl sm:text-4xl font-bold text-[#859484]"> Admin Dashboard </h1><p class="mt-3 text-gray-600 max-w-2xl mx-auto"> Welcome to the admin panel. Use the cards below to manage different sections. </p></header><div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(cards, (card) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: card.title,
          to: card.to,
          class: "group block rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="p-6 flex items-start gap-5"${_scopeId}><div class="${ssrRenderClass([
                "flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-white text-2xl shadow-sm transition-transform duration-300 group-hover:scale-105",
                card.color
              ])}"${_scopeId}>${ssrInterpolate(card.icon)}</div><div${_scopeId}><h2 class="text-lg font-semibold text-[#859484] mb-1"${_scopeId}>${ssrInterpolate(card.title)}</h2><p class="text-sm text-gray-500 leading-relaxed"${_scopeId}>${ssrInterpolate(card.description)}</p></div></div>`);
            } else {
              return [
                createVNode("div", { class: "p-6 flex items-start gap-5" }, [
                  createVNode("div", {
                    class: [
                      "flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-white text-2xl shadow-sm transition-transform duration-300 group-hover:scale-105",
                      card.color
                    ]
                  }, toDisplayString(card.icon), 3),
                  createVNode("div", null, [
                    createVNode("h2", { class: "text-lg font-semibold text-[#859484] mb-1" }, toDisplayString(card.title), 1),
                    createVNode("p", { class: "text-sm text-gray-500 leading-relaxed" }, toDisplayString(card.description), 1)
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CvxUKgQw.mjs.map
