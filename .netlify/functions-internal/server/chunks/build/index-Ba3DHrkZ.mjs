import __nuxt_component_2 from './index-kp2ruu5n.mjs';
import { _ as __nuxt_component_0 } from './NuxtImg-jLe0oRQc.mjs';
import { reactive, ref, mergeProps, unref, useSlots, computed, withCtx, renderSlot, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, createVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { useForwardPropsEmits, AccordionRoot, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } from 'reka-ui';
import { t as tv, g as get } from './tv-DftaqRAe.mjs';
import { r as reactivePick, _ as _sfc_main$2 } from './Icon-Cu0VSR4e.mjs';
import { _ as _export_sfc, p as useSeoMeta, a as useAppConfig } from './server.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-D0f35ZHT.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const theme = {
  "slots": {
    "root": "w-full",
    "item": "border-b border-default last:border-b-0",
    "header": "flex",
    "trigger": "group flex-1 flex items-center gap-1.5 font-medium text-sm py-3.5 focus-visible:outline-primary min-w-0",
    "content": "data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] overflow-hidden focus:outline-none",
    "body": "text-sm pb-3.5",
    "leadingIcon": "shrink-0 size-5",
    "trailingIcon": "shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200",
    "label": "text-start break-words"
  },
  "variants": {
    "disabled": {
      "true": {
        "trigger": "cursor-not-allowed opacity-75"
      }
    }
  }
};
const _sfc_main$1 = {
  __name: "UAccordion",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    items: { type: Array, required: false },
    trailingIcon: { type: String, required: false },
    labelKey: { type: String, required: false, default: "label" },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    collapsible: { type: Boolean, required: false, default: true },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    type: { type: String, required: false, default: "single" },
    disabled: { type: Boolean, required: false },
    unmountOnHide: { type: Boolean, required: false, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "collapsible", "defaultValue", "disabled", "modelValue", "type", "unmountOnHide"), emits);
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.accordion || {} })({
      disabled: props.disabled
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionRoot), mergeProps(unref(rootProps), {
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.items, (item, index2) => {
              _push2(ssrRenderComponent(unref(AccordionItem), {
                key: index2,
                value: item.value || String(index2),
                disabled: item.disabled,
                class: ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class] })
              }, {
                default: withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(AccordionHeader), {
                      as: "div",
                      class: ui.value.header({ class: [props.ui?.header, item.ui?.header] })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(AccordionTrigger), {
                            class: ui.value.trigger({ class: [props.ui?.trigger, item.ui?.trigger], disabled: item.disabled })
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderSlot(_ctx.$slots, "leading", {
                                  item,
                                  index: index2,
                                  open
                                }, () => {
                                  if (item.icon) {
                                    _push5(ssrRenderComponent(_sfc_main$2, {
                                      name: item.icon,
                                      class: ui.value.leadingIcon({ class: [props.ui?.leadingIcon, item?.ui?.leadingIcon] })
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                }, _push5, _parent5, _scopeId4);
                                if (unref(get)(item, props.labelKey) || !!slots.default) {
                                  _push5(`<span class="${ssrRenderClass(ui.value.label({ class: [props.ui?.label, item.ui?.label] }))}"${_scopeId4}>`);
                                  ssrRenderSlot(_ctx.$slots, "default", {
                                    item,
                                    index: index2,
                                    open
                                  }, () => {
                                    _push5(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                                  }, _push5, _parent5, _scopeId4);
                                  _push5(`</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                ssrRenderSlot(_ctx.$slots, "trailing", {
                                  item,
                                  index: index2,
                                  open
                                }, () => {
                                  _push5(ssrRenderComponent(_sfc_main$2, {
                                    name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                    class: ui.value.trailingIcon({ class: [props.ui?.trailingIcon, item.ui?.trailingIcon] })
                                  }, null, _parent5, _scopeId4));
                                }, _push5, _parent5, _scopeId4);
                              } else {
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index: index2,
                                    open
                                  }, () => [
                                    item.icon ? (openBlock(), createBlock(_sfc_main$2, {
                                      key: 0,
                                      name: item.icon,
                                      class: ui.value.leadingIcon({ class: [props.ui?.leadingIcon, item?.ui?.leadingIcon] })
                                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                  ]),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: [props.ui?.label, item.ui?.label] })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index: index2,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index: index2,
                                    open
                                  }, () => [
                                    createVNode(_sfc_main$2, {
                                      name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                      class: ui.value.trailingIcon({ class: [props.ui?.trailingIcon, item.ui?.trailingIcon] })
                                    }, null, 8, ["name", "class"])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(AccordionTrigger), {
                              class: ui.value.trigger({ class: [props.ui?.trigger, item.ui?.trigger], disabled: item.disabled })
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "leading", {
                                  item,
                                  index: index2,
                                  open
                                }, () => [
                                  item.icon ? (openBlock(), createBlock(_sfc_main$2, {
                                    key: 0,
                                    name: item.icon,
                                    class: ui.value.leadingIcon({ class: [props.ui?.leadingIcon, item?.ui?.leadingIcon] })
                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                ]),
                                unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: ui.value.label({ class: [props.ui?.label, item.ui?.label] })
                                }, [
                                  renderSlot(_ctx.$slots, "default", {
                                    item,
                                    index: index2,
                                    open
                                  }, () => [
                                    createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                  ])
                                ], 2)) : createCommentVNode("", true),
                                renderSlot(_ctx.$slots, "trailing", {
                                  item,
                                  index: index2,
                                  open
                                }, () => [
                                  createVNode(_sfc_main$2, {
                                    name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                    class: ui.value.trailingIcon({ class: [props.ui?.trailingIcon, item.ui?.trailingIcon] })
                                  }, null, 8, ["name", "class"])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`]) {
                      _push3(ssrRenderComponent(unref(AccordionContent), {
                        class: ui.value.content({ class: [props.ui?.content, item.ui?.content] })
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, item.slot || "content", {
                              item,
                              index: index2,
                              open
                            }, () => {
                              _push4(`<div class="${ssrRenderClass(ui.value.body({ class: [props.ui?.body, item.ui?.body] }))}"${_scopeId3}>`);
                              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                item,
                                index: index2,
                                open
                              }, () => {
                                _push4(`${ssrInterpolate(item.content)}`);
                              }, _push4, _parent4, _scopeId3);
                              _push4(`</div>`);
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, item.slot || "content", {
                                item,
                                index: index2,
                                open
                              }, () => [
                                createVNode("div", {
                                  class: ui.value.body({ class: [props.ui?.body, item.ui?.body] })
                                }, [
                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                    item,
                                    index: index2,
                                    open
                                  }, () => [
                                    createTextVNode(toDisplayString(item.content), 1)
                                  ])
                                ], 2)
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode(unref(AccordionHeader), {
                        as: "div",
                        class: ui.value.header({ class: [props.ui?.header, item.ui?.header] })
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(AccordionTrigger), {
                            class: ui.value.trigger({ class: [props.ui?.trigger, item.ui?.trigger], disabled: item.disabled })
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "leading", {
                                item,
                                index: index2,
                                open
                              }, () => [
                                item.icon ? (openBlock(), createBlock(_sfc_main$2, {
                                  key: 0,
                                  name: item.icon,
                                  class: ui.value.leadingIcon({ class: [props.ui?.leadingIcon, item?.ui?.leadingIcon] })
                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                              ]),
                              unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ui.value.label({ class: [props.ui?.label, item.ui?.label] })
                              }, [
                                renderSlot(_ctx.$slots, "default", {
                                  item,
                                  index: index2,
                                  open
                                }, () => [
                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                ])
                              ], 2)) : createCommentVNode("", true),
                              renderSlot(_ctx.$slots, "trailing", {
                                item,
                                index: index2,
                                open
                              }, () => [
                                createVNode(_sfc_main$2, {
                                  name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                  class: ui.value.trailingIcon({ class: [props.ui?.trailingIcon, item.ui?.trailingIcon] })
                                }, null, 8, ["name", "class"])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class"])
                        ]),
                        _: 2
                      }, 1032, ["class"]),
                      item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? (openBlock(), createBlock(unref(AccordionContent), {
                        key: 0,
                        class: ui.value.content({ class: [props.ui?.content, item.ui?.content] })
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, item.slot || "content", {
                            item,
                            index: index2,
                            open
                          }, () => [
                            createVNode("div", {
                              class: ui.value.body({ class: [props.ui?.body, item.ui?.body] })
                            }, [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                item,
                                index: index2,
                                open
                              }, () => [
                                createTextVNode(toDisplayString(item.content), 1)
                              ])
                            ], 2)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["class"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(props.items, (item, index2) => {
                return openBlock(), createBlock(unref(AccordionItem), {
                  key: index2,
                  value: item.value || String(index2),
                  disabled: item.disabled,
                  class: ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class] })
                }, {
                  default: withCtx(({ open }) => [
                    createVNode(unref(AccordionHeader), {
                      as: "div",
                      class: ui.value.header({ class: [props.ui?.header, item.ui?.header] })
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(AccordionTrigger), {
                          class: ui.value.trigger({ class: [props.ui?.trigger, item.ui?.trigger], disabled: item.disabled })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index: index2,
                              open
                            }, () => [
                              item.icon ? (openBlock(), createBlock(_sfc_main$2, {
                                key: 0,
                                name: item.icon,
                                class: ui.value.leadingIcon({ class: [props.ui?.leadingIcon, item?.ui?.leadingIcon] })
                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                            ]),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ui.value.label({ class: [props.ui?.label, item.ui?.label] })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index: index2,
                                open
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index: index2,
                              open
                            }, () => [
                              createVNode(_sfc_main$2, {
                                name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                class: ui.value.trailingIcon({ class: [props.ui?.trailingIcon, item.ui?.trailingIcon] })
                              }, null, 8, ["name", "class"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["class"])
                      ]),
                      _: 2
                    }, 1032, ["class"]),
                    item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? (openBlock(), createBlock(unref(AccordionContent), {
                      key: 0,
                      class: ui.value.content({ class: [props.ui?.content, item.ui?.content] })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, item.slot || "content", {
                          item,
                          index: index2,
                          open
                        }, () => [
                          createVNode("div", {
                            class: ui.value.body({ class: [props.ui?.body, item.ui?.body] })
                          }, [
                            renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                              item,
                              index: index2,
                              open
                            }, () => [
                              createTextVNode(toDisplayString(item.content), 1)
                            ])
                          ], 2)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["value", "disabled", "class"]);
              }), 128))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
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
    const faqItems = [
      {
        label: "How long does the application process take?",
        content: "The typical application process takes 2-4 weeks, depending on the country and university. We handle most of the paperwork to speed up the process.",
        defaultOpen: false
      },
      {
        label: "Do you help with visa applications?",
        content: "Yes! We provide comprehensive visa support including document preparation, application submission, and interview coaching.",
        defaultOpen: false
      },
      {
        label: "What are your service fees?",
        content: "Our counselling is completely free! We only charge a success fee after you successfully get admission and visa approval.",
        defaultOpen: false
      },
      {
        label: "Can you help with scholarships?",
        content: "Absolutely! We have access to numerous scholarship opportunities and will help identify and apply for ones that match your profile.",
        defaultOpen: false
      },
      {
        label: "Which countries do you specialize in?",
        content: "We specialize in UK, Canada, USA, Australia, Ireland, Germany, and several other European countries. Each destination has dedicated specialists.",
        defaultOpen: false
      }
    ];
    useSeoMeta({
      title: "Contact Us - B&S Educational Services",
      description: "Get in touch with B&S Educational Services for personalized study abroad guidance. Free counselling, admission support, and visa assistance.",
      ogTitle: "Contact B&S Educational Services - Study Abroad Experts",
      ogDescription: "Start your study abroad journey today. Contact our education experts for free counselling and personalized guidance."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_NuxtImg = __nuxt_component_0;
      const _component_UAccordion = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-slate-50 to-gray-100" }, _attrs))} data-v-9ce446d4>`);
      if (unref(showToast)) {
        _push(`<div class="${ssrRenderClass([
          unref(toastType) === "success" ? "border-emerald-500" : "border-red-500",
          "fixed top-4 right-4 z-50 max-w-md w-full bg-white rounded-lg shadow-lg border-l-4 p-4"
        ])}" data-v-9ce446d4><div class="flex items-center" data-v-9ce446d4><div class="flex-shrink-0" data-v-9ce446d4>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: unref(toastType) === "success" ? "i-heroicons-check-circle" : "i-heroicons-x-circle",
          class: [
            "w-5 h-5",
            unref(toastType) === "success" ? "text-emerald-500" : "text-red-500"
          ]
        }, null, _parent));
        _push(`</div><div class="ml-3" data-v-9ce446d4><p class="text-sm font-medium text-gray-900" data-v-9ce446d4>${ssrInterpolate(unref(toastMessage))}</p></div><div class="ml-auto pl-3" data-v-9ce446d4><button class="text-gray-400 hover:text-gray-600" data-v-9ce446d4>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "i-heroicons-x-mark",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" data-v-9ce446d4><div class="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-orange-50/50" data-v-9ce446d4></div><div class="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-emerald-200/20 to-orange-200/20 rounded-full blur-3xl" data-v-9ce446d4></div><div class="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-orange-200/20 to-emerald-200/20 rounded-full blur-3xl" data-v-9ce446d4></div><div class="max-w-7xl mx-auto relative" data-v-9ce446d4><div class="grid lg:grid-cols-2 gap-12 items-center" data-v-9ce446d4><div class="space-y-8" data-v-9ce446d4><div class="space-y-6" data-v-9ce446d4><h1 class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight" data-v-9ce446d4> Let&#39;s Start Your <span class="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent" data-v-9ce446d4> Study Abroad </span> Journey </h1><p class="text-xl text-gray-600 leading-relaxed max-w-lg" data-v-9ce446d4> Get personalized guidance from our education experts. We&#39;re here to help you find the perfect university and course that matches your dreams and goals. </p></div><div class="grid grid-cols-2 gap-6" data-v-9ce446d4><div class="group text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300" data-v-9ce446d4><div class="text-3xl font-bold text-orange-500 group-hover:scale-110 transition-transform duration-300" data-v-9ce446d4> 500+ </div><div class="text-sm font-medium text-gray-600 mt-1" data-v-9ce446d4> Success Stories </div></div><div class="group text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300" data-v-9ce446d4><div class="text-3xl font-bold text-emerald-600 group-hover:scale-110 transition-transform duration-300" data-v-9ce446d4> 15+ </div><div class="text-sm font-medium text-gray-600 mt-1" data-v-9ce446d4> Countries </div></div></div></div><div class="relative" data-v-9ce446d4><div class="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-2xl" data-v-9ce446d4><div class="w-full h-full flex items-center justify-center text-white text-lg font-medium backdrop-blur-sm bg-black/10" data-v-9ce446d4> [Hero Image Placeholder] </div></div><div class="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100" data-v-9ce446d4><div class="flex items-center space-x-4" data-v-9ce446d4><div class="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center" data-v-9ce446d4>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-heroicons-chat-bubble-left-ellipsis",
        class: "w-6 h-6 text-white"
      }, null, _parent));
      _push(`</div><div data-v-9ce446d4><div class="font-semibold text-gray-900" data-v-9ce446d4>24/7 Support</div><div class="text-sm text-gray-500" data-v-9ce446d4>Always here to help</div></div></div></div></div></div></div></section><section class="py-20 px-4 sm:px-6 lg:px-8" data-v-9ce446d4><div class="max-w-7xl mx-auto" data-v-9ce446d4><div class="grid lg:grid-cols-3 gap-12" data-v-9ce446d4><div class="lg:col-span-2" data-v-9ce446d4><div class="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10" data-v-9ce446d4><div class="mb-10" data-v-9ce446d4><h2 class="text-3xl font-bold text-gray-900 mb-3" data-v-9ce446d4> Start Your Journey </h2><p class="text-gray-600 text-lg" data-v-9ce446d4> Fill out the form below and we&#39;ll reach out to you within 24 hours. </p></div><form class="space-y-8" data-v-9ce446d4><div class="form-section" data-v-9ce446d4><h3 class="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200" data-v-9ce446d4> Personal Information </h3><div class="grid md:grid-cols-2 gap-6" data-v-9ce446d4><div class="form-group" data-v-9ce446d4><label class="block text-sm font-medium text-gray-700 mb-2" data-v-9ce446d4> First Name <span class="text-red-500" data-v-9ce446d4>*</span></label><input${ssrRenderAttr("value", unref(form).firstName)} type="text" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500" placeholder="Enter your first name" required${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-9ce446d4></div><div class="form-group" data-v-9ce446d4><label class="block text-sm font-medium text-gray-700 mb-2" data-v-9ce446d4> Last Name <span class="text-red-500" data-v-9ce446d4>*</span></label><input${ssrRenderAttr("value", unref(form).lastName)} type="text" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500" placeholder="Enter your last name" required${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-9ce446d4></div></div><div class="grid md:grid-cols-2 gap-6 mt-6" data-v-9ce446d4><div class="form-group" data-v-9ce446d4><label class="block text-sm font-medium text-gray-700 mb-2" data-v-9ce446d4> Email Address <span class="text-red-500" data-v-9ce446d4>*</span></label><input${ssrRenderAttr("value", unref(form).email)} type="email" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500" placeholder="your.email@example.com" required${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-9ce446d4></div><div class="form-group" data-v-9ce446d4><label class="block text-sm font-medium text-gray-700 mb-2" data-v-9ce446d4> Phone Number <span class="text-red-500" data-v-9ce446d4>*</span></label><input${ssrRenderAttr("value", unref(form).phone)} type="tel" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500" placeholder="+234 123 456 7890" required${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-9ce446d4></div></div></div><div class="form-section" data-v-9ce446d4><h3 class="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200" data-v-9ce446d4> Study Preferences </h3><div class="grid md:grid-cols-2 gap-6" data-v-9ce446d4><div class="form-group" data-v-9ce446d4><label class="block text-sm font-medium text-gray-700 mb-2" data-v-9ce446d4> Preferred Study Destination <span class="text-red-500" data-v-9ce446d4>*</span></label><select class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500" required${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-9ce446d4><option value="" data-v-9ce446d4${ssrIncludeBooleanAttr(Array.isArray(unref(form).destination) ? ssrLooseContain(unref(form).destination, "") : ssrLooseEqual(unref(form).destination, "")) ? " selected" : ""}>Select a country</option><!--[-->`);
      ssrRenderList(destinations, (destination) => {
        _push(`<option${ssrRenderAttr("value", destination)} data-v-9ce446d4${ssrIncludeBooleanAttr(Array.isArray(unref(form).destination) ? ssrLooseContain(unref(form).destination, destination) : ssrLooseEqual(unref(form).destination, destination)) ? " selected" : ""}>${ssrInterpolate(destination)}</option>`);
      });
      _push(`<!--]--></select></div><div class="form-group" data-v-9ce446d4><label class="block text-sm font-medium text-gray-700 mb-2" data-v-9ce446d4> Study Level <span class="text-red-500" data-v-9ce446d4>*</span></label><select class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500" required${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-9ce446d4><option value="" data-v-9ce446d4${ssrIncludeBooleanAttr(Array.isArray(unref(form).level) ? ssrLooseContain(unref(form).level, "") : ssrLooseEqual(unref(form).level, "")) ? " selected" : ""}>Choose study level</option><option value="Undergraduate" data-v-9ce446d4${ssrIncludeBooleanAttr(Array.isArray(unref(form).level) ? ssrLooseContain(unref(form).level, "Undergraduate") : ssrLooseEqual(unref(form).level, "Undergraduate")) ? " selected" : ""}>Undergraduate</option><option value="Postgraduate" data-v-9ce446d4${ssrIncludeBooleanAttr(Array.isArray(unref(form).level) ? ssrLooseContain(unref(form).level, "Postgraduate") : ssrLooseEqual(unref(form).level, "Postgraduate")) ? " selected" : ""}>Postgraduate</option><option value="Diploma" data-v-9ce446d4${ssrIncludeBooleanAttr(Array.isArray(unref(form).level) ? ssrLooseContain(unref(form).level, "Diploma") : ssrLooseEqual(unref(form).level, "Diploma")) ? " selected" : ""}>Diploma</option><option value="Certificate" data-v-9ce446d4${ssrIncludeBooleanAttr(Array.isArray(unref(form).level) ? ssrLooseContain(unref(form).level, "Certificate") : ssrLooseEqual(unref(form).level, "Certificate")) ? " selected" : ""}>Certificate</option></select></div></div><div class="grid md:grid-cols-2 gap-6 mt-6" data-v-9ce446d4><div class="form-group" data-v-9ce446d4><label class="block text-sm font-medium text-gray-700 mb-2" data-v-9ce446d4> When Would You Like to Start? </label><select class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-9ce446d4><option value="" data-v-9ce446d4${ssrIncludeBooleanAttr(Array.isArray(unref(form).studyTime) ? ssrLooseContain(unref(form).studyTime, "") : ssrLooseEqual(unref(form).studyTime, "")) ? " selected" : ""}>Select a year</option><option value="2025" data-v-9ce446d4${ssrIncludeBooleanAttr(Array.isArray(unref(form).studyTime) ? ssrLooseContain(unref(form).studyTime, "2025") : ssrLooseEqual(unref(form).studyTime, "2025")) ? " selected" : ""}>2025</option><option value="2026" data-v-9ce446d4${ssrIncludeBooleanAttr(Array.isArray(unref(form).studyTime) ? ssrLooseContain(unref(form).studyTime, "2026") : ssrLooseEqual(unref(form).studyTime, "2026")) ? " selected" : ""}>2026</option><option value="2027" data-v-9ce446d4${ssrIncludeBooleanAttr(Array.isArray(unref(form).studyTime) ? ssrLooseContain(unref(form).studyTime, "2027") : ssrLooseEqual(unref(form).studyTime, "2027")) ? " selected" : ""}>2027</option></select></div><div class="form-group" data-v-9ce446d4><label class="block text-sm font-medium text-gray-700 mb-2" data-v-9ce446d4> Counselling Mode </label><select class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-9ce446d4><option value="" data-v-9ce446d4${ssrIncludeBooleanAttr(Array.isArray(unref(form).mode) ? ssrLooseContain(unref(form).mode, "") : ssrLooseEqual(unref(form).mode, "")) ? " selected" : ""}>Choose a mode</option><option value="In-person" data-v-9ce446d4${ssrIncludeBooleanAttr(Array.isArray(unref(form).mode) ? ssrLooseContain(unref(form).mode, "In-person") : ssrLooseEqual(unref(form).mode, "In-person")) ? " selected" : ""}>In-person</option><option value="Virtual" data-v-9ce446d4${ssrIncludeBooleanAttr(Array.isArray(unref(form).mode) ? ssrLooseContain(unref(form).mode, "Virtual") : ssrLooseEqual(unref(form).mode, "Virtual")) ? " selected" : ""}>Virtual</option></select></div></div></div><div class="form-section" data-v-9ce446d4><h3 class="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200" data-v-9ce446d4> Consent &amp; Preferences </h3><div class="space-y-4" data-v-9ce446d4><label class="flex items-start space-x-3 cursor-pointer group" data-v-9ce446d4><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).agreeTerms) ? ssrLooseContain(unref(form).agreeTerms, null) : unref(form).agreeTerms) ? " checked" : ""} type="checkbox" class="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 transition-colors duration-200" required${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-9ce446d4><span class="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200" data-v-9ce446d4> I agree to B&amp;S terms and privacy policy <span class="text-red-500" data-v-9ce446d4>*</span></span></label><label class="flex items-start space-x-3 cursor-pointer group" data-v-9ce446d4><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).contactPref) ? ssrLooseContain(unref(form).contactPref, null) : unref(form).contactPref) ? " checked" : ""} type="checkbox" class="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 transition-colors duration-200"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-9ce446d4><span class="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200" data-v-9ce446d4> Please contact me by phone or email </span></label><label class="flex items-start space-x-3 cursor-pointer group" data-v-9ce446d4><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).receiveUpdates) ? ssrLooseContain(unref(form).receiveUpdates, null) : unref(form).receiveUpdates) ? " checked" : ""} type="checkbox" class="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 transition-colors duration-200"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-9ce446d4><span class="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200" data-v-9ce446d4> I would like to receive updates via email </span></label></div></div><div class="pt-6 text-center" data-v-9ce446d4><button type="submit" class="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-105 disabled:hover:scale-100"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-9ce446d4>`);
      if (unref(isSubmitting)) {
        _push(`<span class="flex items-center justify-center" data-v-9ce446d4>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "i-heroicons-arrow-path",
          class: "w-4 h-4 mr-2 animate-spin"
        }, null, _parent));
        _push(` Submitting... </span>`);
      } else {
        _push(`<span class="flex items-center justify-center" data-v-9ce446d4> Submit Application `);
        _push(ssrRenderComponent(_component_Icon, {
          name: "i-heroicons-paper-airplane",
          class: "w-4 h-4 ml-2"
        }, null, _parent));
        _push(`</span>`);
      }
      _push(`</button><p class="text-sm text-gray-500 mt-4" data-v-9ce446d4> We&#39;ll review your application and get back to you within 24 hours. </p></div></form></div></div><div class="space-y-8" data-v-9ce446d4><div class="bg-white rounded-3xl shadow-xl border border-gray-100 p-8" data-v-9ce446d4><h3 class="text-xl font-semibold text-gray-900 mb-8" data-v-9ce446d4> Get in Touch </h3><div class="space-y-8" data-v-9ce446d4><div class="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200" data-v-9ce446d4><div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-200" data-v-9ce446d4>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-heroicons-phone",
        class: "w-6 h-6 text-orange-600"
      }, null, _parent));
      _push(`</div><div data-v-9ce446d4><h4 class="font-semibold text-gray-900 mb-1" data-v-9ce446d4>Phone</h4><p class="text-gray-700 font-medium" data-v-9ce446d4>+234 806 544 2707</p><p class="text-sm text-gray-500 mt-1" data-v-9ce446d4> Mon-Fri 9AM-6PM WAT </p></div></div><div class="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200" data-v-9ce446d4><div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-200" data-v-9ce446d4>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-heroicons-envelope",
        class: "w-6 h-6 text-orange-600"
      }, null, _parent));
      _push(`</div><div data-v-9ce446d4><h4 class="font-semibold text-gray-900 mb-1" data-v-9ce446d4>Email</h4><p class="text-gray-700 font-medium" data-v-9ce446d4> info@bs-education.com </p><p class="text-sm text-gray-500 mt-1" data-v-9ce446d4> We&#39;ll respond within 24hrs </p></div></div><div class="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200" data-v-9ce446d4><div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-200" data-v-9ce446d4>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-heroicons-map-pin",
        class: "w-6 h-6 text-orange-600"
      }, null, _parent));
      _push(`</div><div data-v-9ce446d4><h4 class="font-semibold text-gray-900 mb-1" data-v-9ce446d4>Office</h4><p class="text-gray-700 font-medium" data-v-9ce446d4>Lagos, Nigeria</p><p class="text-sm text-gray-500 mt-1" data-v-9ce446d4> Visit by appointment only </p></div></div></div></div><div class="rounded-3xl p-8 text-white bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 shadow-xl" data-v-9ce446d4><div class="text-center space-y-6" data-v-9ce446d4><div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm" data-v-9ce446d4>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-simple-icons-whatsapp",
        class: "w-8 h-8"
      }, null, _parent));
      _push(`</div><div data-v-9ce446d4><h3 class="text-xl font-semibold mb-3" data-v-9ce446d4> Quick WhatsApp Chat </h3><p class="text-emerald-100 mb-6" data-v-9ce446d4> Get instant answers to your questions via WhatsApp </p><a href="https://wa.me/+2348065442707" target="_blank" class="inline-flex items-center px-6 py-3 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" data-v-9ce446d4> Chat Now `);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-heroicons-arrow-top-right-on-square",
        class: "w-4 h-4 ml-2"
      }, null, _parent));
      _push(`</a></div></div></div><div class="rounded-3xl overflow-hidden shadow-xl" data-v-9ce446d4><div class="aspect-[4/3] bg-gradient-to-br from-emerald-400 to-emerald-600" data-v-9ce446d4><div class="w-full h-full flex items-center justify-center text-white text-lg font-medium backdrop-blur-sm bg-black/10" data-v-9ce446d4>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/success.jpg",
        alt: "Study abroad destinations",
        class: "absolute inset-0 w-full h-full object-cover",
        loading: "eager",
        preload: ""
      }, null, _parent));
      _push(`</div></div></div></div></div></div></section><section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-emerald-50/30" data-v-9ce446d4><div class="max-w-4xl mx-auto" data-v-9ce446d4><div class="text-center mb-16" data-v-9ce446d4><h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-v-9ce446d4> Frequently Asked Questions </h2><p class="text-xl text-gray-600" data-v-9ce446d4> Quick answers to common questions about studying abroad </p></div>`);
      _push(ssrRenderComponent(_component_UAccordion, {
        items: faqItems,
        ui: {
          wrapper: "space-y-4",
          item: {
            base: "bg-white rounded-2xl shadow-lg border border-gray-100",
            padding: "p-6",
            color: "text-gray-900"
          },
          trigger: {
            base: "flex items-center justify-between w-full text-left font-semibold hover:text-orange-600 transition-colors duration-200"
          }
        }
      }, null, _parent));
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9ce446d4"]]);

export { index as default };
//# sourceMappingURL=index-Ba3DHrkZ.mjs.map
