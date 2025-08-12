import { _ as _sfc_main$b } from './Button-CdU8nkXy.mjs';
import { _ as __nuxt_component_0 } from './NuxtImg-jLe0oRQc.mjs';
import { mergeProps, withCtx, createTextVNode, ref, createVNode, createBlock, openBlock, toDisplayString, reactive, unref, computed, watch, nextTick, useSlots, createCommentVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { t as tv } from './tv-DftaqRAe.mjs';
import { _ as _export_sfc, a as useAppConfig } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BZ9eU4-B.mjs';
import { u as useBlog } from './useBlog-DLrcGbre.mjs';
import __nuxt_component_2 from './index-kp2ruu5n.mjs';
import { _ as _sfc_main$c } from './Icon-Cu0VSR4e.mjs';
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
import 'tailwind-variants';
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
import '@iconify/utils/lib/css/icon';
import './asyncData-D0f35ZHT.mjs';

const _sfc_main$a = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$b;
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "relative w-full bg-gray-50 overflow-hidden px-4 sm:px-6 md:px-12 lg:px-24",
        style: { "height": "90dvh" }
      }, _attrs))}><svg class="absolute top-0 left-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 opacity-30 z-0" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="2" fill="gray"></circle><circle cx="30" cy="10" r="2" fill="orange"></circle><circle cx="50" cy="10" r="2" fill="gray"></circle><circle cx="70" cy="10" r="2" fill="orange"></circle><circle cx="90" cy="10" r="2" fill="gray"></circle><circle cx="10" cy="30" r="2" fill="orange"></circle><circle cx="30" cy="30" r="2" fill="gray"></circle><circle cx="50" cy="30" r="2" fill="orange"></circle><circle cx="70" cy="30" r="2" fill="gray"></circle><circle cx="90" cy="30" r="2" fill="orange"></circle><circle cx="10" cy="50" r="2" fill="gray"></circle><circle cx="30" cy="50" r="2" fill="orange"></circle><circle cx="50" cy="50" r="2" fill="gray"></circle><circle cx="70" cy="50" r="2" fill="orange"></circle><circle cx="90" cy="50" r="2" fill="gray"></circle></svg><div class="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-10 h-full py-6 md:py-0"><div class="text-black w-full md:w-[55%] space-y-4 md:space-y-6 text-center md:text-left"><h1 class="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight"> Turn Your Study Abroad Dream Into Reality </h1><p class="text-base sm:text-lg md:text-xl text-gray-700 max-w-lg"> B&amp;S Educational Services offers <strong>free expert counselling</strong>, admission processing, visa support, and test prep for students looking to study in the UK, USA, Hungary, Australia, and more. </p><div class="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "white",
        size: "lg",
        class: "bg-[#5d6b56] text-white font-bold px-6 py-3 hover:bg-gray-100 rounded-lg shadow-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Book Free Consultation `);
          } else {
            return [
              createTextVNode(" Book Free Consultation ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "white",
        variant: "ghost",
        size: "lg",
        to: "https://wa.me/234XXXXXXXXXX",
        class: "px-6 py-3 bg-[#eb6534] hover:bg-[#b66654] text-white font-semibold rounded-lg shadow-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Chat on WhatsApp `);
          } else {
            return [
              createTextVNode(" Chat on WhatsApp ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="w-full md:w-[45%] flex justify-center items-center px-2 sm:px-0">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/graduant.png",
        alt: "Graduated student abroad",
        class: "w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-cover rounded-tl-[80px] sm:rounded-tl-[100px] md:rounded-tl-[140px] rounded-br-[80px] sm:rounded-br-[100px] md:rounded-br-[140px] rounded-tr-none rounded-bl-none"
      }, null, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "rounded-lg overflow-hidden",
    "header": "p-4 sm:px-6",
    "body": "p-4 sm:p-6",
    "footer": "p-4 sm:px-6"
  },
  "variants": {
    "variant": {
      "solid": {
        "root": "bg-inverted text-inverted"
      },
      "outline": {
        "root": "bg-default ring ring-default divide-y divide-default"
      },
      "soft": {
        "root": "bg-elevated/50 divide-y divide-default"
      },
      "subtle": {
        "root": "bg-elevated/50 ring ring-default divide-y divide-default"
      }
    }
  },
  "defaultVariants": {
    "variant": "outline"
  }
};
const _sfc_main$9 = {
  __name: "UCard",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    variant: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.card || {} })({
      variant: props.variant
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.header) {
              _push2(`<div class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.default) {
              _push2(`<div class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.footer) {
              _push2(`<div class="${ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !!slots.header ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.header({ class: props.ui?.header })
              }, [
                renderSlot(_ctx.$slots, "header")
              ], 2)) : createCommentVNode("", true),
              !!slots.default ? (openBlock(), createBlock("div", {
                key: 1,
                class: ui.value.body({ class: props.ui?.body })
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)) : createCommentVNode("", true),
              !!slots.footer ? (openBlock(), createBlock("div", {
                key: 2,
                class: ui.value.footer({ class: props.ui?.footer })
              }, [
                renderSlot(_ctx.$slots, "footer")
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Card.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "OurServices",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        title: "Free Counselling",
        description: "We guide you with personalized, no-cost consultations to help you choose the best study destination.",
        cta: "Book a Session",
        link: "/contact#counselling"
      },
      {
        title: "University & Program Selection",
        description: "We help you select programs that match your goals, budget, and academic profile.",
        cta: "Find a Program",
        link: "/services/program-selection"
      },
      {
        title: "Application Support",
        description: "From start to submission, we support your university and scholarship applications.",
        cta: "Start Application",
        link: "/contact#application"
      },
      {
        title: "Visa Assistance",
        description: "We guide you through visa forms, documents, and interview prep for a smoother approval.",
        cta: "Get Visa Help",
        link: "/services/visa-support"
      },
      {
        title: "Test Prep & Coaching",
        description: "We offer classes for IELTS, TOEFL, and more to help you meet admission requirements.",
        cta: "Join a Class",
        link: "/services/test-prep"
      },
      {
        title: "Travel & Accommodation",
        description: "We assist with travel plans and finding housing that fits your needs abroad.",
        cta: "Plan Travel",
        link: "/services/travel"
      }
    ];
    const cardRefs = ref([]);
    const visibleCards = ref(/* @__PURE__ */ new Set());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$9;
      const _component_UButton = _sfc_main$b;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 py-20 px-4 sm:px-8 lg:px-24" }, _attrs))} data-v-f77e350f><h2 class="text-3xl sm:text-4xl font-bold text-center text-black mb-12" data-v-f77e350f> What We Offer </h2><div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-v-f77e350f><!--[-->`);
      ssrRenderList(services, (service, index2) => {
        _push(ssrRenderComponent(_component_UCard, {
          variant: "solid",
          key: index2,
          ref_for: true,
          ref: (el) => cardRefs.value[index2] = el,
          class: ["bg-[#ACBEA3]/10 hover:shadow-lg transition-all duration-300 border border-[#f5f4f4] relative overflow-hidden opacity-0 translate-y-8", { "animate-in": visibleCards.value.has(index2) }],
          ui: {
            base: " rounded-xl h-full flex flex-col justify-between",
            body: { base: "p-6" },
            footer: { base: "px-6 pb-6 pt-2" }
          }
        }, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="text-xl font-semibold text-[#505050] relative z-10" data-v-f77e350f${_scopeId}>${ssrInterpolate(service.title)}</h3>`);
            } else {
              return [
                createVNode("h3", { class: "text-xl font-semibold text-[#505050] relative z-10" }, toDisplayString(service.title), 1)
              ];
            }
          }),
          footer: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                "trailing-icon": "i-lucide-arrow-right",
                variant: "soft",
                class: "mt-4 w-full relative z-10",
                to: service.link
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(service.cta)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(service.cta), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UButton, {
                  color: "primary",
                  "trailing-icon": "i-lucide-arrow-right",
                  variant: "soft",
                  class: "mt-4 w-full relative z-10",
                  to: service.link
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(service.cta), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute bottom-0 right-0 pointer-events-none opacity-20" data-v-f77e350f${_scopeId}><svg width="80" height="80" viewBox="0 0 80 80" class="hidden sm:block" data-v-f77e350f${_scopeId}><circle cx="60" cy="60" r="6"${ssrRenderAttr("fill", index2 % 2 === 0 ? "#6B7280" : "#EA580C")} data-v-f77e350f${_scopeId}></circle><circle cx="45" cy="65" r="4"${ssrRenderAttr("fill", index2 % 2 === 0 ? "#EA580C" : "#6B7280")} data-v-f77e350f${_scopeId}></circle><circle cx="70" cy="45" r="4"${ssrRenderAttr("fill", index2 % 2 === 0 ? "#EA580C" : "#6B7280")} data-v-f77e350f${_scopeId}></circle><circle cx="55" cy="50" r="3"${ssrRenderAttr("fill", index2 % 2 === 0 ? "#6B7280" : "#EA580C")} data-v-f77e350f${_scopeId}></circle><circle cx="65" cy="70" r="3"${ssrRenderAttr("fill", index2 % 2 === 0 ? "#6B7280" : "#EA580C")} data-v-f77e350f${_scopeId}></circle><circle cx="75" cy="55" r="2"${ssrRenderAttr("fill", index2 % 2 === 0 ? "#EA580C" : "#6B7280")} data-v-f77e350f${_scopeId}></circle><circle cx="50" cy="75" r="2"${ssrRenderAttr("fill", index2 % 2 === 0 ? "#EA580C" : "#6B7280")} data-v-f77e350f${_scopeId}></circle></svg><svg width="60" height="60" viewBox="0 0 60 60" class="block sm:hidden" data-v-f77e350f${_scopeId}><circle cx="45" cy="45" r="4"${ssrRenderAttr("fill", index2 % 2 === 0 ? "#6B7280" : "#EA580C")} data-v-f77e350f${_scopeId}></circle><circle cx="35" cy="50" r="3"${ssrRenderAttr("fill", index2 % 2 === 0 ? "#EA580C" : "#6B7280")} data-v-f77e350f${_scopeId}></circle><circle cx="50" cy="35" r="3"${ssrRenderAttr("fill", index2 % 2 === 0 ? "#EA580C" : "#6B7280")} data-v-f77e350f${_scopeId}></circle><circle cx="40" cy="40" r="2"${ssrRenderAttr("fill", index2 % 2 === 0 ? "#6B7280" : "#EA580C")} data-v-f77e350f${_scopeId}></circle><circle cx="55" cy="50" r="2"${ssrRenderAttr("fill", index2 % 2 === 0 ? "#6B7280" : "#EA580C")} data-v-f77e350f${_scopeId}></circle></svg></div><p class="text-gray-600 relative z-10" data-v-f77e350f${_scopeId}>${ssrInterpolate(service.description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "absolute bottom-0 right-0 pointer-events-none opacity-20" }, [
                  (openBlock(), createBlock("svg", {
                    width: "80",
                    height: "80",
                    viewBox: "0 0 80 80",
                    class: "hidden sm:block"
                  }, [
                    createVNode("circle", {
                      cx: "60",
                      cy: "60",
                      r: "6",
                      fill: index2 % 2 === 0 ? "#6B7280" : "#EA580C"
                    }, null, 8, ["fill"]),
                    createVNode("circle", {
                      cx: "45",
                      cy: "65",
                      r: "4",
                      fill: index2 % 2 === 0 ? "#EA580C" : "#6B7280"
                    }, null, 8, ["fill"]),
                    createVNode("circle", {
                      cx: "70",
                      cy: "45",
                      r: "4",
                      fill: index2 % 2 === 0 ? "#EA580C" : "#6B7280"
                    }, null, 8, ["fill"]),
                    createVNode("circle", {
                      cx: "55",
                      cy: "50",
                      r: "3",
                      fill: index2 % 2 === 0 ? "#6B7280" : "#EA580C"
                    }, null, 8, ["fill"]),
                    createVNode("circle", {
                      cx: "65",
                      cy: "70",
                      r: "3",
                      fill: index2 % 2 === 0 ? "#6B7280" : "#EA580C"
                    }, null, 8, ["fill"]),
                    createVNode("circle", {
                      cx: "75",
                      cy: "55",
                      r: "2",
                      fill: index2 % 2 === 0 ? "#EA580C" : "#6B7280"
                    }, null, 8, ["fill"]),
                    createVNode("circle", {
                      cx: "50",
                      cy: "75",
                      r: "2",
                      fill: index2 % 2 === 0 ? "#EA580C" : "#6B7280"
                    }, null, 8, ["fill"])
                  ])),
                  (openBlock(), createBlock("svg", {
                    width: "60",
                    height: "60",
                    viewBox: "0 0 60 60",
                    class: "block sm:hidden"
                  }, [
                    createVNode("circle", {
                      cx: "45",
                      cy: "45",
                      r: "4",
                      fill: index2 % 2 === 0 ? "#6B7280" : "#EA580C"
                    }, null, 8, ["fill"]),
                    createVNode("circle", {
                      cx: "35",
                      cy: "50",
                      r: "3",
                      fill: index2 % 2 === 0 ? "#EA580C" : "#6B7280"
                    }, null, 8, ["fill"]),
                    createVNode("circle", {
                      cx: "50",
                      cy: "35",
                      r: "3",
                      fill: index2 % 2 === 0 ? "#EA580C" : "#6B7280"
                    }, null, 8, ["fill"]),
                    createVNode("circle", {
                      cx: "40",
                      cy: "40",
                      r: "2",
                      fill: index2 % 2 === 0 ? "#6B7280" : "#EA580C"
                    }, null, 8, ["fill"]),
                    createVNode("circle", {
                      cx: "55",
                      cy: "50",
                      r: "2",
                      fill: index2 % 2 === 0 ? "#6B7280" : "#EA580C"
                    }, null, 8, ["fill"])
                  ]))
                ]),
                createVNode("p", { class: "text-gray-600 relative z-10" }, toDisplayString(service.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OurServices.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$8, [["__scopeId", "data-v-f77e350f"]]), { __name: "OurServices" });
const _sfc_main$7 = {
  __name: "Locations",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white py-16 px-4 sm:px-6 lg:px-24" }, _attrs))}><h2 class="text-3xl sm:text-4xl font-bold text-black mb-10 text-center"> Where Can You Study? </h2><div class="grid grid-cols-2 gap-4 sm:hidden"><div class="aspect-square group relative overflow-hidden rounded-xl">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/uk.png",
        alt: "Study in the UK",
        class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-black/40 flex items-center justify-center"><h3 class="text-white text-lg font-semibold">UK</h3></div></div><div class="aspect-square group relative overflow-hidden rounded-xl">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/usa.jpg",
        alt: "Study in the USA",
        class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-black/40 flex items-center justify-center"><h3 class="text-white text-lg font-semibold">USA</h3></div></div><div class="aspect-square group relative overflow-hidden rounded-xl">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/australia.jpg",
        alt: "Study in Australia",
        class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-black/40 flex items-center justify-center"><h3 class="text-white text-lg font-semibold">Australia</h3></div></div><div class="aspect-square group relative overflow-hidden rounded-xl">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/france.jpg",
        alt: "Study in France",
        class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-black/40 flex items-center justify-center"><h3 class="text-white text-lg font-semibold">France</h3></div></div><div class="aspect-square group relative overflow-hidden rounded-xl">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/malta.jpg",
        alt: "Study in Malta",
        class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-black/40 flex items-center justify-center"><h3 class="text-white text-lg font-semibold">Malta</h3></div></div><div class="aspect-square group relative overflow-hidden rounded-xl">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/hungary.png",
        alt: "Study in Hungary",
        class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-black/40 flex items-center justify-center"><h3 class="text-white text-lg font-semibold">Hungary</h3></div></div><div class="aspect-square group relative overflow-hidden rounded-xl">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/cyprus.png",
        alt: "Study in Cyprus",
        class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-black/40 flex items-center justify-center"><h3 class="text-white text-lg font-semibold">Cyprus</h3></div></div><div class="aspect-square group relative overflow-hidden rounded-xl">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/nigeria.jpg",
        alt: "Study in Nigeria",
        class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-black/40 flex items-center justify-center"><h3 class="text-white text-lg font-semibold">Nigeria</h3></div></div></div><div class="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[200px] gap-4"><div class="col-span-2 row-span-2 group relative overflow-hidden rounded-xl">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/uk.png",
        alt: "Study in the UK",
        class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-black/40 flex items-center justify-center"><h3 class="text-white text-xl sm:text-2xl font-semibold">UK</h3></div></div><div class="col-span-2 group relative overflow-hidden rounded-xl">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/usa.jpg",
        alt: "Study in the USA",
        class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-black/40 flex items-center justify-center"><h3 class="text-white text-xl sm:text-2xl font-semibold">USA</h3></div></div><div class="col-span-2 group relative overflow-hidden rounded-xl">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/australia.jpg",
        alt: "Study in Australia",
        class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-black/40 flex items-center justify-center"><h3 class="text-white text-xl sm:text-2xl font-semibold">Australia</h3></div></div><div class="col-span-2 row-span-2 group relative overflow-hidden rounded-xl">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/france.jpg",
        alt: "Study in France",
        class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-black/40 flex items-center justify-center"><h3 class="text-white text-xl sm:text-2xl font-semibold">France</h3></div></div><div class="group relative overflow-hidden rounded-xl">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/malta.jpg",
        alt: "Study in Malta",
        class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-black/40 flex items-center justify-center"><h3 class="text-white text-lg font-semibold">Malta</h3></div></div><div class="group relative overflow-hidden rounded-xl">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/hungary.png",
        alt: "Study in Hungary",
        class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-black/40 flex items-center justify-center"><h3 class="text-white text-lg font-semibold">Hungary</h3></div></div><div class="col-span-2 group relative overflow-hidden rounded-xl">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/cyprus.png",
        alt: "Study in Cyprus",
        class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-black/40 flex items-center justify-center"><h3 class="text-white text-xl sm:text-2xl font-semibold">Cyprus</h3></div></div><div class="col-span-2 group relative overflow-hidden rounded-xl">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/nigeria.jpg",
        alt: "Study in Nigeria",
        class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-black/40 flex items-center justify-center"><h3 class="text-white text-xl sm:text-2xl font-semibold">Nigeria</h3></div></div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Locations.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "ApplicationForm",
  __ssrInlineRender: true,
  setup(__props) {
    const destinations = [
      "UK",
      "USA",
      "Australia",
      "France",
      "Hungary",
      "Malta",
      "Cyprus"
    ];
    const form = reactive({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      destination: "",
      mode: "",
      studyTime: "",
      level: "",
      agreeTerms: false,
      contactPref: false,
      receiveUpdates: false
    });
    const isSubmitting = ref(false);
    const showToast = ref(false);
    const toastMessage = ref("");
    const toastType = ref("success");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "form-section" }, _attrs))} data-v-5edc0f83><div class="container" data-v-5edc0f83><div class="form-grid" data-v-5edc0f83><div class="form-container" data-v-5edc0f83><div class="form-card" data-v-5edc0f83><div class="form-header" data-v-5edc0f83><h2 class="form-title" data-v-5edc0f83>Start Your Journey</h2><p class="form-subtitle" data-v-5edc0f83> Fill out the form below and we&#39;ll reach out to you within 24 hours. </p></div><form class="form" data-v-5edc0f83><div class="form-section-group" data-v-5edc0f83><h3 class="section-title" data-v-5edc0f83>Personal Information</h3><div class="field-row" data-v-5edc0f83><div class="form-group" data-v-5edc0f83><label class="label" data-v-5edc0f83>First Name *</label><input${ssrRenderAttr("value", unref(form).firstName)} type="text" class="input" placeholder="Enter your first name" required${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-5edc0f83></div><div class="form-group" data-v-5edc0f83><label class="label" data-v-5edc0f83>Last Name *</label><input${ssrRenderAttr("value", unref(form).lastName)} type="text" class="input" placeholder="Enter your last name" required${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-5edc0f83></div></div><div class="field-row" data-v-5edc0f83><div class="form-group" data-v-5edc0f83><label class="label" data-v-5edc0f83>Email Address *</label><input${ssrRenderAttr("value", unref(form).email)} type="email" class="input" placeholder="your.email@example.com" required${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-5edc0f83></div><div class="form-group" data-v-5edc0f83><label class="label" data-v-5edc0f83>Phone Number *</label><input${ssrRenderAttr("value", unref(form).phone)} type="tel" class="input" placeholder="+234 123 456 7890" required${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-5edc0f83></div></div></div><div class="form-section-group" data-v-5edc0f83><h3 class="section-title" data-v-5edc0f83>Study Preferences</h3><div class="field-row" data-v-5edc0f83><div class="form-group" data-v-5edc0f83><label class="label" data-v-5edc0f83>Preferred Study Destination *</label><select class="select" required${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-5edc0f83><option value="" data-v-5edc0f83${ssrIncludeBooleanAttr(Array.isArray(unref(form).destination) ? ssrLooseContain(unref(form).destination, "") : ssrLooseEqual(unref(form).destination, "")) ? " selected" : ""}>Select a country</option><!--[-->`);
      ssrRenderList(destinations, (destination) => {
        _push(`<option${ssrRenderAttr("value", destination)} data-v-5edc0f83${ssrIncludeBooleanAttr(Array.isArray(unref(form).destination) ? ssrLooseContain(unref(form).destination, destination) : ssrLooseEqual(unref(form).destination, destination)) ? " selected" : ""}>${ssrInterpolate(destination)}</option>`);
      });
      _push(`<!--]--></select></div><div class="form-group" data-v-5edc0f83><label class="label" data-v-5edc0f83>Study Level *</label><select class="select" required${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-5edc0f83><option value="" data-v-5edc0f83${ssrIncludeBooleanAttr(Array.isArray(unref(form).level) ? ssrLooseContain(unref(form).level, "") : ssrLooseEqual(unref(form).level, "")) ? " selected" : ""}>Choose study level</option><option value="Undergraduate" data-v-5edc0f83${ssrIncludeBooleanAttr(Array.isArray(unref(form).level) ? ssrLooseContain(unref(form).level, "Undergraduate") : ssrLooseEqual(unref(form).level, "Undergraduate")) ? " selected" : ""}>Undergraduate</option><option value="Postgraduate" data-v-5edc0f83${ssrIncludeBooleanAttr(Array.isArray(unref(form).level) ? ssrLooseContain(unref(form).level, "Postgraduate") : ssrLooseEqual(unref(form).level, "Postgraduate")) ? " selected" : ""}>Postgraduate</option><option value="Diploma" data-v-5edc0f83${ssrIncludeBooleanAttr(Array.isArray(unref(form).level) ? ssrLooseContain(unref(form).level, "Diploma") : ssrLooseEqual(unref(form).level, "Diploma")) ? " selected" : ""}>Diploma</option><option value="Certificate" data-v-5edc0f83${ssrIncludeBooleanAttr(Array.isArray(unref(form).level) ? ssrLooseContain(unref(form).level, "Certificate") : ssrLooseEqual(unref(form).level, "Certificate")) ? " selected" : ""}>Certificate</option></select></div></div><div class="field-row" data-v-5edc0f83><div class="form-group" data-v-5edc0f83><label class="label" data-v-5edc0f83>When Would You Like to Start?</label><select class="select"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-5edc0f83><option value="" data-v-5edc0f83${ssrIncludeBooleanAttr(Array.isArray(unref(form).studyTime) ? ssrLooseContain(unref(form).studyTime, "") : ssrLooseEqual(unref(form).studyTime, "")) ? " selected" : ""}>Select a year</option><option value="2025" data-v-5edc0f83${ssrIncludeBooleanAttr(Array.isArray(unref(form).studyTime) ? ssrLooseContain(unref(form).studyTime, "2025") : ssrLooseEqual(unref(form).studyTime, "2025")) ? " selected" : ""}>2025</option><option value="2026" data-v-5edc0f83${ssrIncludeBooleanAttr(Array.isArray(unref(form).studyTime) ? ssrLooseContain(unref(form).studyTime, "2026") : ssrLooseEqual(unref(form).studyTime, "2026")) ? " selected" : ""}>2026</option><option value="2027" data-v-5edc0f83${ssrIncludeBooleanAttr(Array.isArray(unref(form).studyTime) ? ssrLooseContain(unref(form).studyTime, "2027") : ssrLooseEqual(unref(form).studyTime, "2027")) ? " selected" : ""}>2027</option></select></div><div class="form-group" data-v-5edc0f83><label class="label" data-v-5edc0f83>Counselling Mode</label><select class="select"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-5edc0f83><option value="" data-v-5edc0f83${ssrIncludeBooleanAttr(Array.isArray(unref(form).mode) ? ssrLooseContain(unref(form).mode, "") : ssrLooseEqual(unref(form).mode, "")) ? " selected" : ""}>Choose a mode</option><option value="In-person" data-v-5edc0f83${ssrIncludeBooleanAttr(Array.isArray(unref(form).mode) ? ssrLooseContain(unref(form).mode, "In-person") : ssrLooseEqual(unref(form).mode, "In-person")) ? " selected" : ""}>In-person</option><option value="Virtual" data-v-5edc0f83${ssrIncludeBooleanAttr(Array.isArray(unref(form).mode) ? ssrLooseContain(unref(form).mode, "Virtual") : ssrLooseEqual(unref(form).mode, "Virtual")) ? " selected" : ""}>Virtual</option></select></div></div></div><div class="form-section-group" data-v-5edc0f83><h3 class="section-title" data-v-5edc0f83>Consent &amp; Preferences</h3><div class="checkbox-group" data-v-5edc0f83><label class="checkbox-item" data-v-5edc0f83><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).agreeTerms) ? ssrLooseContain(unref(form).agreeTerms, null) : unref(form).agreeTerms) ? " checked" : ""} type="checkbox" class="checkbox" required${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-5edc0f83><span class="checkbox-text" data-v-5edc0f83> I agree to B&amp;S terms and privacy policy * </span></label><label class="checkbox-item" data-v-5edc0f83><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).contactPref) ? ssrLooseContain(unref(form).contactPref, null) : unref(form).contactPref) ? " checked" : ""} type="checkbox" class="checkbox"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-5edc0f83><span class="checkbox-text" data-v-5edc0f83>Please contact me by phone or email</span></label><label class="checkbox-item" data-v-5edc0f83><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).receiveUpdates) ? ssrLooseContain(unref(form).receiveUpdates, null) : unref(form).receiveUpdates) ? " checked" : ""} type="checkbox" class="checkbox"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-5edc0f83><span class="checkbox-text" data-v-5edc0f83>I would like to receive updates via email</span></label></div></div><div class="form-footer" data-v-5edc0f83><button type="submit" class="submit-btn"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-5edc0f83>`);
      if (unref(isSubmitting)) {
        _push(`<span data-v-5edc0f83>Submitting...</span>`);
      } else {
        _push(`<span data-v-5edc0f83>Submit Application</span>`);
      }
      _push(`</button><p class="footer-text" data-v-5edc0f83> We&#39;ll review your application and get back to you within 24 hours. </p></div></form></div></div><div class="image-container" data-v-5edc0f83>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/caps.jpg",
        alt: "Student celebrating graduation abroad",
        class: "image"
      }, null, _parent));
      _push(`<div class="stats" data-v-5edc0f83><div class="stat" data-v-5edc0f83><div class="stat-number" data-v-5edc0f83>500+</div><div class="stat-label" data-v-5edc0f83>Students Placed</div></div><div class="stat" data-v-5edc0f83><div class="stat-number" data-v-5edc0f83>95%</div><div class="stat-label" data-v-5edc0f83>Visa Success Rate</div></div></div></div></div></div>`);
      if (unref(showToast)) {
        _push(`<div class="${ssrRenderClass(["toast", unref(toastType)])}" data-v-5edc0f83><div class="toast-content" data-v-5edc0f83><div class="toast-icon" data-v-5edc0f83>`);
        if (unref(toastType) === "success") {
          _push(`<span data-v-5edc0f83>✓</span>`);
        } else {
          _push(`<span data-v-5edc0f83>⚠</span>`);
        }
        _push(`</div><div class="toast-message" data-v-5edc0f83>${ssrInterpolate(unref(toastMessage))}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ApplicationForm.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-5edc0f83"]]);
const _sfc_main$5 = {
  __name: "Blog",
  __ssrInlineRender: true,
  setup(__props) {
    useBlog();
    const posts = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const postsWithExcerpts = computed(() => {
      return posts.value.map((post) => ({
        ...post,
        excerpt: post.content ? (() => {
          const textContent = post.content.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
          return textContent.length > 100 ? textContent.substring(0, 100) + "..." : textContent;
        })() : "No content available."
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white py-20 px-6 md:px-12 lg:px-24" }, _attrs))} data-v-42cce5bd><div class="max-w-7xl mx-auto" data-v-42cce5bd><h2 class="text-3xl sm:text-4xl font-bold text-[#859484] mb-12 text-center" data-v-42cce5bd> News, Updates &amp; Featured Scholarships </h2>`);
      if (unref(loading)) {
        _push(`<div class="grid gap-10 lg:grid-cols-3 md:grid-cols-2" data-v-42cce5bd><!--[-->`);
        ssrRenderList(3, (n) => {
          _push(`<div class="rounded-xl overflow-hidden shadow border border-gray-100 animate-pulse" data-v-42cce5bd><div class="w-full h-56 bg-gray-200" data-v-42cce5bd></div><div class="p-6 bg-white" data-v-42cce5bd><div class="h-6 bg-gray-200 rounded mb-2" data-v-42cce5bd></div><div class="h-4 bg-gray-200 rounded mb-2" data-v-42cce5bd></div><div class="h-4 bg-gray-200 rounded w-3/4 mb-4" data-v-42cce5bd></div><div class="h-4 bg-gray-200 rounded w-1/3" data-v-42cce5bd></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (unref(error)) {
        _push(`<div class="text-center py-12" data-v-42cce5bd><p class="text-red-600 mb-4" data-v-42cce5bd>${ssrInterpolate(unref(error))}</p><button class="bg-[#EB6534] text-white px-6 py-2 rounded-lg hover:bg-[#d55529] transition-colors" data-v-42cce5bd> Try Again </button></div>`);
      } else if (unref(postsWithExcerpts).length > 0) {
        _push(`<div class="grid gap-10 lg:grid-cols-3 md:grid-cols-2" data-v-42cce5bd><!--[-->`);
        ssrRenderList(unref(postsWithExcerpts), (post) => {
          _push(`<div class="rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 border border-gray-100" data-v-42cce5bd>`);
          if (post.image_url) {
            _push(ssrRenderComponent(_component_NuxtImg, {
              src: post.image_url || "/images/placeholder-blog.jpg",
              alt: post.title,
              class: "w-full h-56 object-cover",
              format: "webp",
              loading: "lazy"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="p-6 bg-white" data-v-42cce5bd><h3 class="text-xl font-semibold text-[#859484] mb-2" data-v-42cce5bd>${ssrInterpolate(post.title)}</h3><p class="text-sm text-gray-600 mb-4 line-clamp-3" data-v-42cce5bd>${ssrInterpolate(post.excerpt)}</p>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/resources/${post.id}`,
            class: "text-[#EB6534] font-medium text-sm hover:underline transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Read more → `);
              } else {
                return [
                  createTextVNode(" Read more → ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-12" data-v-42cce5bd><p class="text-gray-600" data-v-42cce5bd>No blog posts available at the moment.</p></div>`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-42cce5bd"]]);
const _sfc_main$4 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    ref(/* @__PURE__ */ new Map());
    ref(/* @__PURE__ */ new Map());
    ref(null);
    const starsHtml = computed(() => {
      const starSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
      return Array(5).fill(starSvg).join("");
    });
    const testimonials = ref([
      {
        id: 1,
        name: "Adebayo Olamide",
        text: "B&S guided me through every step of my UK Masters admission! From university selection to visa processing, they made everything seamless.",
        course: "MSc Computer Science",
        country: "United Kingdom",
        countryFlag: "/flags/uk.svg",
        avatar: "/img/default.png",
        featured: true
      },
      {
        id: 2,
        name: "Chioma Nwosu",
        text: "I never thought studying in Canada was possible until B&S showed me the scholarship opportunities. Now I'm living my dream!",
        course: "MBA International Business",
        country: "Canada",
        countryFlag: "/flags/canada.svg",
        avatar: "/img/default.png",
        featured: false
      },
      {
        id: 3,
        name: "Ibrahim Hassan",
        text: "The team's support didn't end after admission. They helped with accommodation and even airport pickup. Truly exceptional service!",
        course: "PhD Engineering",
        country: "Australia",
        countryFlag: "/flags/australia.svg",
        avatar: "/img/default.png",
        featured: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonials-section" }, _attrs))} data-v-b73cf1e7><div class="container" data-v-b73cf1e7><div class="section-header" data-v-b73cf1e7><h2 class="section-title" data-v-b73cf1e7>Success Stories</h2><p class="section-subtitle" data-v-b73cf1e7> Hear from our students who are now studying abroad and achieving their dreams </p></div><div class="testimonials-grid" data-v-b73cf1e7><!--[-->`);
      ssrRenderList(testimonials.value, (testimonial, index2) => {
        _push(`<div class="${ssrRenderClass([{ "featured": testimonial.featured }, "testimonial-card"])}" data-v-b73cf1e7><div class="gloss-overlay" data-v-b73cf1e7></div><div class="card-content" data-v-b73cf1e7><div class="quote-icon" data-v-b73cf1e7><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-b73cf1e7><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" fill="currentColor" data-v-b73cf1e7></path></svg></div><blockquote class="testimonial-text" data-v-b73cf1e7> &quot;${ssrInterpolate(testimonial.text)}&quot; </blockquote><div class="student-info" data-v-b73cf1e7><div class="student-avatar" data-v-b73cf1e7>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: testimonial.avatar,
          alt: `${testimonial.name} avatar`,
          width: "36",
          height: "36",
          class: "avatar-image",
          loading: "lazy",
          preload: ""
        }, null, _parent));
        _push(`</div><div class="student-details" data-v-b73cf1e7><h4 class="student-name" data-v-b73cf1e7>${ssrInterpolate(testimonial.name)}</h4><p class="student-course" data-v-b73cf1e7>${ssrInterpolate(testimonial.course)}</p><div class="study-location" data-v-b73cf1e7>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: testimonial.countryFlag,
          alt: `${testimonial.country} flag`,
          width: "14",
          height: "10",
          class: "country-flag",
          loading: "lazy",
          preload: ""
        }, null, _parent));
        _push(`<span class="country-name" data-v-b73cf1e7>${ssrInterpolate(testimonial.country)}</span></div></div></div><div class="rating" data-v-b73cf1e7><div class="stars" data-v-b73cf1e7>${starsHtml.value ?? ""}</div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonials.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["__scopeId", "data-v-b73cf1e7"]]), { __name: "Testimonials" });
const _sfc_main$3 = {
  __name: "Partners",
  __ssrInlineRender: true,
  setup(__props) {
    const logos = [
      "/img/debrecen.jpeg",
      "/img/coventry.png",
      "/img/uwe.jpeg",
      "/img/bangor.webp",
      "/img/hull.jpeg",
      "/img/sruc.png",
      "/img/bradford.png",
      "/img/uclan.webp",
      "/img/abbey.webp",
      "/img/shorelight.webp",
      "/img/wakefield.webp",
      "/img/ieu.png",
      "/img/into.webp",
      "/img/navitas.webp",
      "/img/kings.jpeg",
      "/img/oxford.webp"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-white py-16 px-4 sm:px-8 lg:px-24 overflow-hidden" }, _attrs))} data-v-539caa6b><h2 class="text-2xl sm:text-3xl font-bold text-center text-[#859484] mb-12" data-v-539caa6b> Our Trusted Partners </h2><div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" data-v-539caa6b></div><div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" data-v-539caa6b></div><div class="space-y-6" data-v-539caa6b><div class="overflow-hidden" data-v-539caa6b><div class="flex gap-8 animate-scroll-left will-change-transform" data-v-539caa6b><div class="flex gap-8 flex-shrink-0" data-v-539caa6b><!--[-->`);
      ssrRenderList(logos.slice(0, 8), (logo, index2) => {
        _push(`<img${ssrRenderAttr("src", logo)} alt="Partner Logo" class="w-36 h-20 object-contain grayscale opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0" data-v-539caa6b>`);
      });
      _push(`<!--]--></div><div class="flex gap-8 flex-shrink-0" data-v-539caa6b><!--[-->`);
      ssrRenderList(logos.slice(0, 8), (logo, index2) => {
        _push(`<img${ssrRenderAttr("src", logo)} alt="Partner Logo" class="w-36 h-20 object-contain grayscale opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0" data-v-539caa6b>`);
      });
      _push(`<!--]--></div></div></div><div class="overflow-hidden" data-v-539caa6b><div class="flex gap-8 animate-scroll-right will-change-transform" data-v-539caa6b><div class="flex gap-8 flex-shrink-0" data-v-539caa6b><!--[-->`);
      ssrRenderList(logos.slice(8, 16), (logo, index2) => {
        _push(`<img${ssrRenderAttr("src", logo)} alt="Partner Logo" class="w-36 h-20 object-contain grayscale opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0" data-v-539caa6b>`);
      });
      _push(`<!--]--></div><div class="flex gap-8 flex-shrink-0" data-v-539caa6b><!--[-->`);
      ssrRenderList(logos.slice(8, 16), (logo, index2) => {
        _push(`<img${ssrRenderAttr("src", logo)} alt="Partner Logo" class="w-36 h-20 object-contain grayscale opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0" data-v-539caa6b>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Partners.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-539caa6b"]]);
const _sfc_main$2 = {
  __name: "Faq",
  __ssrInlineRender: true,
  setup(__props) {
    const activeIndex = ref(null);
    ref([]);
    const mainFaqs = ref([
      {
        question: "Do I need IELTS or TOEFL to study abroad?",
        answer: "Not always! While most universities require English proficiency tests, some accept alternatives like Duolingo, PTE, or even waive the requirement if you studied in English. We help identify universities that match your language qualifications and can guide you through test preparation if needed.",
        cta: {
          text: "Check Your Eligibility",
          link: "/apply"
        }
      },
      {
        question: "What's the easiest country to get a visa for?",
        answer: "Countries like <strong>Canada, Ireland, and Australia</strong> generally have more straightforward visa processes for Nigerian students. However, the 'easiest' depends on your profile, course choice, and financial situation. Our counsellors assess your background to recommend the best options with highest success rates.",
        cta: {
          text: "Get Country Recommendations",
          link: "/book-counselling"
        }
      },
      {
        question: "How much do your services cost?",
        answer: "Our <strong>initial consultation is completely FREE</strong>. Service fees vary based on the package you choose - from basic admission support to comprehensive visa and travel assistance. We offer flexible payment plans and our fees are transparent with no hidden charges.",
        cta: {
          text: "View Service Packages",
          link: "/services"
        }
      },
      {
        question: "Can I work while studying abroad?",
        answer: "Yes! Most study destinations allow part-time work during studies. <strong>Canada and Australia</strong> offer 20 hours/week during studies and unlimited hours during breaks. The <strong>UK</strong> allows 20 hours/week, while the <strong>US</strong> has on-campus work opportunities. We provide guidance on work regulations for each country.",
        cta: null
      },
      {
        question: "What if I don't have enough money for tuition?",
        answer: "Don't let finances stop your dreams! We help identify <strong>scholarships, grants, and affordable universities</strong>. Many students combine partial scholarships with education loans or family support. We also recommend countries with lower tuition fees and living costs that fit your budget.",
        cta: {
          text: "Explore Scholarships",
          link: "/scholarships"
        }
      },
      {
        question: "How long does the entire process take?",
        answer: "Typically <strong>6-12 months</strong> from application to travel, depending on the intake and country. We recommend starting at least 8-10 months before your intended study date. Our structured timeline ensures you meet all deadlines without rushing through important steps.",
        cta: {
          text: "Download Timeline Guide",
          link: "/resources"
        }
      },
      {
        question: "What happens if my visa gets rejected?",
        answer: "While rare with our guidance (we have a 95%+ success rate), we provide <strong>full support for reapplication or alternative options</strong>. This includes reviewing rejection reasons, strengthening your profile, or exploring other suitable countries. Your success is our commitment.",
        cta: null
      },
      {
        question: "Do you help with accommodation and travel arrangements?",
        answer: "Absolutely! Our support extends beyond admissions. We assist with <strong>accommodation booking, airport pickup, SIM cards, bank account opening</strong>, and settling-in support. Many of our students arrive to a home away from home, not a foreign country.",
        cta: {
          text: "See Full Support Services",
          link: "/services"
        }
      }
    ]);
    watch(activeIndex, () => {
      if (activeIndex.value !== null) {
        nextTick(() => {
          const activeElement = (void 0).querySelector(".faq-item.active");
          if (activeElement) {
            activeElement.scrollIntoView({ block: "nearest" });
          }
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "faq-section" }, _attrs))} data-v-8fbc81a7><div class="container" data-v-8fbc81a7><div class="section-header" data-v-8fbc81a7><h2 class="section-title" data-v-8fbc81a7>Frequently Asked Questions</h2><p class="section-subtitle" data-v-8fbc81a7> Get answers to common questions about studying abroad and our services </p></div><div class="faq-grid" data-v-8fbc81a7><div class="faq-main" data-v-8fbc81a7><div class="faq-list" data-v-8fbc81a7><!--[-->`);
      ssrRenderList(unref(mainFaqs), (faq, index2) => {
        _push(`<div class="${ssrRenderClass([{ "active": unref(activeIndex) === index2 }, "faq-item"])}" data-v-8fbc81a7><button class="faq-question"${ssrRenderAttr("aria-expanded", unref(activeIndex) === index2)} data-v-8fbc81a7><span class="question-text" data-v-8fbc81a7>${ssrInterpolate(faq.question)}</span><div class="toggle-icon" data-v-8fbc81a7><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="${ssrRenderClass({ "rotated": unref(activeIndex) === index2 })}" data-v-8fbc81a7><path d="M6 9l6 6 6-6" data-v-8fbc81a7></path></svg></div></button><div class="faq-answer" data-v-8fbc81a7><div class="answer-content" data-v-8fbc81a7><p data-v-8fbc81a7>${faq.answer ?? ""}</p>`);
        if (faq.cta) {
          _push(`<div class="answer-cta" data-v-8fbc81a7>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: faq.cta.link,
            class: "cta-button"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(faq.cta.text)} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8fbc81a7${_scopeId}><path d="M5 12h14M12 5l7 7-7 7" data-v-8fbc81a7${_scopeId}></path></svg>`);
              } else {
                return [
                  createTextVNode(toDisplayString(faq.cta.text) + " ", 1),
                  (openBlock(), createBlock("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  }, [
                    createVNode("path", { d: "M5 12h14M12 5l7 7-7 7" })
                  ]))
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="faq-sidebar" data-v-8fbc81a7><div class="help-card" data-v-8fbc81a7><div class="help-icon" data-v-8fbc81a7><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8fbc81a7><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" data-v-8fbc81a7></path><path d="M12 17h.01" data-v-8fbc81a7></path></svg></div><h3 class="help-title" data-v-8fbc81a7>Still Have Questions?</h3><p class="help-text" data-v-8fbc81a7> Can&#39;t find what you&#39;re looking for? Our counsellors are here to help with personalized guidance. </p><div class="help-actions" data-v-8fbc81a7>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/book-counselling",
        class: "help-button primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Book Free Consultation `);
          } else {
            return [
              createTextVNode(" Book Free Consultation ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="tel:+2348065442707" class="help-button secondary" data-v-8fbc81a7><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8fbc81a7><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-v-8fbc81a7></path></svg> Call Now </a></div></div><div class="resources-card" data-v-8fbc81a7><h4 class="resources-title" data-v-8fbc81a7>Popular Resources</h4><ul class="resources-list" data-v-8fbc81a7><li data-v-8fbc81a7>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/resources",
        class: "resource-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8fbc81a7${_scopeId}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-v-8fbc81a7${_scopeId}></path><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" data-v-8fbc81a7${_scopeId}></path></svg> 2025 Student Guide `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                createVNode("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                createVNode("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
              ])),
              createTextVNode(" 2025 Student Guide ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-8fbc81a7>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/scholarships",
        class: "resource-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8fbc81a7${_scopeId}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-v-8fbc81a7${_scopeId}></path></svg> Scholarship Database `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                createVNode("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })
              ])),
              createTextVNode(" Scholarship Database ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-8fbc81a7>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/countries",
        class: "resource-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8fbc81a7${_scopeId}><circle cx="12" cy="12" r="10" data-v-8fbc81a7${_scopeId}></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-v-8fbc81a7${_scopeId}></path></svg> Country Guides `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                createVNode("circle", {
                  cx: "12",
                  cy: "12",
                  r: "10"
                }),
                createVNode("path", { d: "M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
              ])),
              createTextVNode(" Country Guides ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Faq.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-8fbc81a7"]]), { __name: "Faq" });
const _sfc_main$1 = {
  __name: "Chat",
  __ssrInlineRender: true,
  setup(__props) {
    const brandColors = {
      baseColor: "#f4f5f3",
      primaryColor: "#6BAE7A"
    };
    const isChatOpen = ref(false);
    const messages = ref([]);
    const currentLevel = ref(0);
    const navigationStack = ref([]);
    const isTyping = ref(false);
    const typingText = ref("");
    const chatOptions = {
      0: [
        {
          id: 1,
          text: "Study Destinations",
          icon: "heroicons:globe-alt",
          response: "Great! We help students get admitted to top universities worldwide. Which region interests you most?",
          children: [
            { id: 11, text: "United States", icon: "twemoji:flag-united-states", response: "The US has excellent universities and diverse programs. We can help with applications, visa processes, and scholarship opportunities. Would you like to know about specific requirements or popular programs?" },
            { id: 12, text: "United Kingdom", icon: "twemoji:flag-united-kingdom", response: "The UK offers world-class education with shorter program durations. We assist with UCAS applications, student visa applications, and finding the right course. What aspect interests you most?" },
            { id: 13, text: "Canada", icon: "twemoji:flag-canada", response: "Canada is known for its high-quality education and post-study work opportunities. We help with university applications, study permits, and settlement guidance. What would you like to explore?" },
            { id: 14, text: "Australia", icon: "twemoji:flag-australia", response: "Australia offers excellent education with a great lifestyle. We assist with university applications, student visas, and pathway programs. How can we help you with your Australian dream?" }
          ]
        },
        {
          id: 2,
          text: "Application Process",
          icon: "heroicons:document-text",
          response: "We guide you through every step of the application process. What stage are you currently at?",
          children: [
            { id: 21, text: "University Selection", icon: "heroicons:academic-cap", response: "We'll help you choose the right universities based on your profile, preferences, and budget. Our counselors will create a personalized university list for you." },
            { id: 22, text: "Document Preparation", icon: "heroicons:folder", response: "We assist with preparing all required documents including SOP, LORs, transcripts, and certificates. Our team ensures everything meets university standards." },
            { id: 23, text: "Application Submission", icon: "heroicons:paper-airplane", response: "We handle the complete application submission process and track your applications until you receive admission decisions." },
            { id: 24, text: "Visa Assistance", icon: "heroicons:identification", response: "Our visa experts will guide you through the entire visa application process, from documentation to interview preparation." }
          ]
        },
        {
          id: 3,
          text: "Test Preparation",
          icon: "heroicons:book-open",
          response: "We offer comprehensive test preparation for various standardized tests. Which test are you planning to take?",
          children: [
            { id: 31, text: "IELTS Coaching", icon: "heroicons:language", response: "Our IELTS coaching includes comprehensive training for all four skills: Reading, Writing, Listening, and Speaking. We offer both group and individual classes." },
            { id: 32, text: "TOEFL Preparation", icon: "heroicons:speaker-wave", response: "Our TOEFL prep course covers all sections with practice tests and personalized feedback. We help you achieve your target score efficiently." },
            { id: 33, text: "GRE/GMAT Coaching", icon: "heroicons:calculator", response: "We provide intensive GRE and GMAT preparation with expert instructors, practice materials, and strategic test-taking techniques." },
            { id: 34, text: "SAT/ACT Prep", icon: "heroicons:pencil", response: "Our SAT/ACT preparation helps high school students achieve competitive scores for undergraduate admissions in the US." }
          ]
        },
        {
          id: 4,
          text: "Scholarships & Financial Aid",
          icon: "heroicons:currency-dollar",
          response: "We help you find and apply for various scholarship opportunities. What type of funding are you looking for?",
          children: [
            { id: 41, text: "Merit-based Scholarships", icon: "heroicons:trophy", response: "We identify merit-based scholarships that match your academic profile and help you prepare competitive applications." },
            { id: 42, text: "Need-based Financial Aid", icon: "heroicons:heart", response: "We assist with need-based financial aid applications and help you understand the requirements for different programs." },
            { id: 43, text: "Country-specific Scholarships", icon: "heroicons:flag", response: "We provide information about government and university-specific scholarships available in your chosen destination." },
            { id: 44, text: "Education Loans", icon: "heroicons:building-library", response: "We can connect you with education loan providers and help you understand the application process and requirements." }
          ]
        },
        {
          id: 5,
          text: "Career Counseling",
          icon: "heroicons:briefcase",
          response: "Our career counselors help you make informed decisions about your academic and professional future. What guidance do you need?",
          children: [
            { id: 51, text: "Course Selection", icon: "heroicons:list-bullet", response: "We help you choose the right course based on your interests, career goals, and market demand in your chosen field." },
            { id: 52, text: "University Comparison", icon: "heroicons:scale", response: "We provide detailed comparisons of universities, programs, costs, and outcomes to help you make the best choice." },
            { id: 53, text: "Career Prospects", icon: "heroicons:chart-bar", response: "We analyze career prospects and job market trends in different countries and fields to guide your decisions." },
            { id: 54, text: "Post-study Options", icon: "heroicons:arrow-path", response: "We explain post-study work opportunities, permanent residency pathways, and career development options in different countries." }
          ]
        },
        {
          id: 6,
          text: "Book Free Consultation",
          icon: "heroicons:calendar-days",
          response: "Perfect! Our expert counselors are ready to provide personalized guidance for your study abroad journey.",
          action: "consultation"
        }
      ]
    };
    computed(() => {
      return [];
    });
    function getInitialOptions() {
      return chatOptions[0];
    }
    function toggleChat() {
      isChatOpen.value = !isChatOpen.value;
      if (!isChatOpen.value) {
        resetChat();
      }
    }
    function resetChat() {
      messages.value = [];
      currentLevel.value = 0;
      navigationStack.value = [];
      isTyping.value = false;
      typingText.value = "";
    }
    function openWhatsApp() {
      const phoneNumber = "2348065442707";
      const message = encodeURIComponent("Hello! I'm interested in B&S Educational Services. Can you help me with study abroad opportunities?");
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      (void 0).open(whatsappUrl, "_blank");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$b;
      const _component_Icon = __nuxt_component_2;
      const _component_UIcon = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f873bb20><div class="fixed bottom-6 right-6 z-50 flex flex-col space-y-4" data-v-f873bb20>`);
      _push(ssrRenderComponent(_component_UButton, {
        onClick: openWhatsApp,
        ui: {
          rounded: "rounded-full",
          size: {
            default: "w-14 h-14"
          }
        },
        class: "shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 p-3",
        style: { backgroundColor: "#25D366" },
        variant: "solid"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:whatsapp",
              class: "w-6 h-6 text-white"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "mdi:whatsapp",
                class: "w-6 h-6 text-white"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        onClick: toggleChat,
        ui: {
          rounded: "rounded-full",
          size: {
            default: "w-14 h-14"
          }
        },
        class: "shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 p-3",
        style: { backgroundColor: brandColors.primaryColor },
        variant: "solid"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: unref(isChatOpen) ? "i-lucide-x" : "i-lucide-message-circle",
              class: "w-6 h-6 text-white"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                name: unref(isChatOpen) ? "i-lucide-x" : "i-lucide-message-circle",
                class: "w-6 h-6 text-white"
              }, null, 8, ["name"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(isChatOpen)) {
        _push(`<div class="fixed inset-0 z-40 lg:inset-auto lg:bottom-6 lg:right-6 lg:w-96 lg:h-[500px]" data-v-f873bb20><div class="lg:hidden fixed inset-0 bg-black bg-opacity-50" data-v-f873bb20></div><div class="relative bg-white h-full lg:rounded-xl lg:shadow-2xl flex flex-col overflow-hidden border border-gray-200" data-v-f873bb20><div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between" style="${ssrRenderStyle({ backgroundColor: brandColors.baseColor })}" data-v-f873bb20><div class="flex items-center space-x-3" data-v-f873bb20><div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold" style="${ssrRenderStyle({ backgroundColor: brandColors.primaryColor })}" data-v-f873bb20> B&amp;S </div><div data-v-f873bb20><h3 class="font-semibold text-gray-900" data-v-f873bb20>B&amp;S Educational Services</h3><p class="text-sm text-gray-500" data-v-f873bb20>How can we help you today?</p></div></div>`);
        _push(ssrRenderComponent(_component_UButton, {
          onClick: toggleChat,
          variant: "ghost",
          size: "sm",
          class: "lg:hidden"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "heroicons:x-mark",
                class: "w-5 h-5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "heroicons:x-mark",
                  class: "w-5 h-5"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-50 to-white" data-v-f873bb20><div class="flex items-start space-x-4" data-v-f873bb20><div class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md flex-shrink-0" style="${ssrRenderStyle({ backgroundColor: brandColors.primaryColor })}" data-v-f873bb20> B&amp;S </div><div class="bg-white rounded-2xl rounded-tl-md px-5 py-4 max-w-sm shadow-sm border border-gray-100" data-v-f873bb20><p class="text-sm text-gray-800 leading-relaxed mb-3" data-v-f873bb20> Welcome to B&amp;S Educational Services! I&#39;m here to help you with your study abroad journey. </p><p class="text-xs text-gray-600 mb-4" data-v-f873bb20>Choose from the topics below to get started:</p><div class="space-y-2" data-v-f873bb20><!--[-->`);
        ssrRenderList(getInitialOptions(), (option) => {
          _push(`<button class="w-full text-left px-3 py-2 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200 group" data-v-f873bb20><div class="flex items-center space-x-2" data-v-f873bb20>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: option.icon,
            class: "w-4 h-4 text-gray-500 group-hover:text-green-600"
          }, null, _parent));
          _push(`<span class="text-xs font-medium text-gray-700 group-hover:text-green-700" data-v-f873bb20>${ssrInterpolate(option.text)}</span></div></button>`);
        });
        _push(`<!--]--></div></div></div><!--[-->`);
        ssrRenderList(unref(messages), (message) => {
          _push(`<div class="space-y-4" data-v-f873bb20><div class="flex justify-end" data-v-f873bb20><div class="rounded-2xl rounded-tr-md px-5 py-4 max-w-xs text-white shadow-sm" style="${ssrRenderStyle({
            backgroundColor: brandColors.primaryColor,
            background: `linear-gradient(135deg, ${brandColors.primaryColor} 0%, #5a9f6a 100%)`
          })}" data-v-f873bb20><p class="text-sm font-medium" data-v-f873bb20>${ssrInterpolate(message.text)}</p></div></div>`);
          if (message.response) {
            _push(`<div class="flex items-start space-x-4" data-v-f873bb20><div class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md flex-shrink-0" style="${ssrRenderStyle({ backgroundColor: brandColors.primaryColor })}" data-v-f873bb20> B&amp;S </div><div class="bg-white rounded-2xl rounded-tl-md px-5 py-4 max-w-sm shadow-sm border border-gray-100" data-v-f873bb20><p class="text-sm text-gray-800 leading-relaxed mb-3" data-v-f873bb20>${ssrInterpolate(message.response)}</p>`);
            if (message.options && message.options.length > 0) {
              _push(`<div class="space-y-2 mt-3 pt-3 border-t border-gray-100" data-v-f873bb20><p class="text-xs text-gray-600 mb-2" data-v-f873bb20>What would you like to explore?</p><!--[-->`);
              ssrRenderList(message.options, (option) => {
                _push(`<button class="w-full text-left px-3 py-2 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200 group" data-v-f873bb20><div class="flex items-center space-x-2" data-v-f873bb20>`);
                _push(ssrRenderComponent(_component_Icon, {
                  name: option.icon,
                  class: "w-4 h-4 text-gray-500 group-hover:text-green-600"
                }, null, _parent));
                _push(`<span class="text-xs font-medium text-gray-700 group-hover:text-green-700" data-v-f873bb20>${ssrInterpolate(option.text)}</span></div></button>`);
              });
              _push(`<!--]-->`);
              if (unref(currentLevel) > 0) {
                _push(`<button class="w-full text-left px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group mt-2" data-v-f873bb20><div class="flex items-center space-x-2" data-v-f873bb20>`);
                _push(ssrRenderComponent(_component_Icon, {
                  name: "heroicons:arrow-left",
                  class: "w-4 h-4 text-gray-500 group-hover:text-gray-600"
                }, null, _parent));
                _push(`<span class="text-xs font-medium text-gray-700 group-hover:text-gray-800" data-v-f873bb20>Back to previous options</span></div></button>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        if (unref(isTyping)) {
          _push(`<div class="flex items-start space-x-4" data-v-f873bb20><div class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md flex-shrink-0" style="${ssrRenderStyle({ backgroundColor: brandColors.primaryColor })}" data-v-f873bb20> B&amp;S </div><div class="bg-white rounded-2xl rounded-tl-md px-5 py-4 shadow-sm border border-gray-100" data-v-f873bb20><div class="flex items-center space-x-2" data-v-f873bb20><div class="typing-dots" data-v-f873bb20><div class="dot" data-v-f873bb20></div><div class="dot" data-v-f873bb20></div><div class="dot" data-v-f873bb20></div></div><span class="text-sm text-gray-600" data-v-f873bb20>${ssrInterpolate(unref(typingText))}</span></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(messages).length === 0) {
          _push(`<div class="text-center py-8" data-v-f873bb20><p class="text-xs text-gray-500" data-v-f873bb20>Select any topic above to start our conversation</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="border-t border-gray-100 px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100" data-v-f873bb20><p class="text-xs text-gray-600 text-center leading-relaxed" data-v-f873bb20> Need immediate assistance? <button class="font-semibold underline hover:no-underline transition-colors duration-200" style="${ssrRenderStyle({ color: brandColors.primaryColor })}" data-v-f873bb20> Chat on WhatsApp </button></p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-f873bb20"]]), { __name: "Chat" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeroSection = _sfc_main$a;
  const _component_OurServices = __nuxt_component_1;
  const _component_Locations = _sfc_main$7;
  const _component_ApplicationForm = __nuxt_component_3;
  const _component_Blog = __nuxt_component_4;
  const _component_Testimonials = __nuxt_component_5;
  const _component_Partners = __nuxt_component_6;
  const _component_Faq = __nuxt_component_7;
  const _component_Chat = __nuxt_component_8;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-screen overflow-x-hidden" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
  _push(ssrRenderComponent(_component_OurServices, null, null, _parent));
  _push(ssrRenderComponent(_component_Locations, null, null, _parent));
  _push(ssrRenderComponent(_component_ApplicationForm, null, null, _parent));
  _push(ssrRenderComponent(_component_Blog, null, null, _parent));
  _push(ssrRenderComponent(_component_Testimonials, null, null, _parent));
  _push(ssrRenderComponent(_component_Partners, null, null, _parent));
  _push(ssrRenderComponent(_component_Faq, null, null, _parent));
  _push(ssrRenderComponent(_component_Chat, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-AdSWV3hU.mjs.map
