import { _ as __nuxt_component_0$2 } from './nuxt-link-BZ9eU4-B.mjs';
import { _ as __nuxt_component_0$1 } from './NuxtImg-jLe0oRQc.mjs';
import __nuxt_component_2 from './index-kp2ruu5n.mjs';
import { mergeProps, computed, withCtx, createTextVNode, ref, watch, createVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderTeleport, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, q as __nuxt_component_1, e as useRoute } from './server.mjs';
import { _ as _sfc_main$3 } from './Icon-Cu0VSR4e.mjs';
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
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-D0f35ZHT.mjs';
import 'vue-router';
import '@supabase/ssr';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'reka-ui';

const _sfc_main$2 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const isMobileMenuOpen = ref(false);
    const showServicesDropdown = ref(false);
    const showCoachingDropdown = ref(false);
    const showResourcesDropdown = ref(false);
    const showContactDropdown = ref(false);
    const mainRoutes = [
      { path: "/", name: "Home" },
      { path: "/events", name: "Events" },
      { path: "/services", name: "Services" },
      { path: "/coaching", name: "Test Prep" },
      { path: "/resources", name: "Resources" },
      { path: "/contact", name: "Contact" }
    ];
    [
      ...mainRoutes,
      { path: "/book-counselling", name: "Book Free Counselling" }
    ];
    const route = useRoute();
    watch(
      () => route.path,
      () => {
        isMobileMenuOpen.value = false;
        showServicesDropdown.value = false;
        showCoachingDropdown.value = false;
        showResourcesDropdown.value = false;
        showContactDropdown.value = false;
      }
    );
    watch(isMobileMenuOpen, (isOpen) => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_NuxtImg = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_2;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200" }, _attrs))} data-v-19ec67dd><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-19ec67dd><div class="flex items-center justify-between h-16 lg:h-20" data-v-19ec67dd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center space-x-3 flex-shrink-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 lg:w-14 lg:h-12" data-v-19ec67dd${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/bs-primary.png",
              alt: "B&S Educational Services logo",
              class: "w-full h-full object-contain",
              loading: "eager",
              width: "52",
              height: "48"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="hidden sm:block" data-v-19ec67dd${_scopeId}><h1 class="text-md lg:text-lg font-bold text-gray-900" data-v-19ec67dd${_scopeId}> B&amp;S Educational Services </h1></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 lg:w-14 lg:h-12" }, [
                createVNode(_component_NuxtImg, {
                  src: "/img/bs-primary.png",
                  alt: "B&S Educational Services logo",
                  class: "w-full h-full object-contain",
                  loading: "eager",
                  width: "52",
                  height: "48"
                })
              ]),
              createVNode("div", { class: "hidden sm:block" }, [
                createVNode("h1", { class: "text-md lg:text-lg font-bold text-gray-900" }, " B&S Educational Services ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden lg:flex items-center space-x-2 text-sm" data-v-19ec67dd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: ["px-4 py-2 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] font-medium rounded-lg transition-all duration-200", { "bg-[#859484]/15 text-[#859484]": _ctx.$route.path === "/" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/events",
        class: ["px-4 py-2 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] font-medium rounded-lg transition-all duration-200", {
          "bg-[#859484]/15 text-[#859484]": _ctx.$route.path === "/about"
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Events `);
          } else {
            return [
              createTextVNode(" Events ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative" data-v-19ec67dd><button class="${ssrRenderClass([{
        "bg-[#859484]/15 text-[#859484]": _ctx.$route.path.startsWith("/services")
      }, "px-4 py-2 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] font-medium rounded-lg transition-all duration-200 flex items-center space-x-1"])}" data-v-19ec67dd><span data-v-19ec67dd>Services</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:chevron-down",
        class: ["w-4 h-4 transition-transform duration-200", { "rotate-180": unref(showServicesDropdown) }]
      }, null, _parent));
      _push(`</button>`);
      if (unref(showServicesDropdown)) {
        _push(`<div class="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50" data-v-19ec67dd>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/services",
          class: "block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="font-medium" data-v-19ec67dd${_scopeId}>All Services</div><div class="text-sm text-gray-500" data-v-19ec67dd${_scopeId}>Complete overview</div>`);
            } else {
              return [
                createVNode("div", { class: "font-medium" }, "All Services"),
                createVNode("div", { class: "text-sm text-gray-500" }, "Complete overview")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/services/counselling",
          class: "block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="font-medium" data-v-19ec67dd${_scopeId}>Admission Counselling</div><div class="text-sm text-gray-500" data-v-19ec67dd${_scopeId}> University placement guidance </div>`);
            } else {
              return [
                createVNode("div", { class: "font-medium" }, "Admission Counselling"),
                createVNode("div", { class: "text-sm text-gray-500" }, " University placement guidance ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/services/visa-assistance",
          class: "block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="font-medium" data-v-19ec67dd${_scopeId}>Visa Assistance</div><div class="text-sm text-gray-500" data-v-19ec67dd${_scopeId}>Student visa support</div>`);
            } else {
              return [
                createVNode("div", { class: "font-medium" }, "Visa Assistance"),
                createVNode("div", { class: "text-sm text-gray-500" }, "Student visa support")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="relative" data-v-19ec67dd><button class="${ssrRenderClass([{
        "bg-[#859484]/15 text-[#859484]": _ctx.$route.path.startsWith("/coaching")
      }, "px-4 py-2 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] font-medium rounded-lg transition-all duration-200 flex items-center space-x-1"])}" data-v-19ec67dd><span data-v-19ec67dd>Test Prep</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:chevron-down",
        class: ["w-4 h-4 transition-transform duration-200", { "rotate-180": unref(showCoachingDropdown) }]
      }, null, _parent));
      _push(`</button>`);
      if (unref(showCoachingDropdown)) {
        _push(`<div class="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50" data-v-19ec67dd>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/coaching",
          class: "block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="font-medium" data-v-19ec67dd${_scopeId}>All Test Prep</div><div class="text-sm text-gray-500" data-v-19ec67dd${_scopeId}> Complete test preparation </div>`);
            } else {
              return [
                createVNode("div", { class: "font-medium" }, "All Test Prep"),
                createVNode("div", { class: "text-sm text-gray-500" }, " Complete test preparation ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/coaching/ielts",
          class: "block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="font-medium" data-v-19ec67dd${_scopeId}>IELTS Preparation</div><div class="text-sm text-gray-500" data-v-19ec67dd${_scopeId}> International English testing </div>`);
            } else {
              return [
                createVNode("div", { class: "font-medium" }, "IELTS Preparation"),
                createVNode("div", { class: "text-sm text-gray-500" }, " International English testing ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/coaching/toefl",
          class: "block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="font-medium" data-v-19ec67dd${_scopeId}>TOEFL Preparation</div><div class="text-sm text-gray-500" data-v-19ec67dd${_scopeId}> Test of English proficiency </div>`);
            } else {
              return [
                createVNode("div", { class: "font-medium" }, "TOEFL Preparation"),
                createVNode("div", { class: "text-sm text-gray-500" }, " Test of English proficiency ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/coaching/gre",
          class: "block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="font-medium" data-v-19ec67dd${_scopeId}>GRE Preparation</div><div class="text-sm text-gray-500" data-v-19ec67dd${_scopeId}> Graduate Record Examination </div>`);
            } else {
              return [
                createVNode("div", { class: "font-medium" }, "GRE Preparation"),
                createVNode("div", { class: "text-sm text-gray-500" }, " Graduate Record Examination ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/coaching/gmat",
          class: "block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="font-medium" data-v-19ec67dd${_scopeId}>GMAT Preparation</div><div class="text-sm text-gray-500" data-v-19ec67dd${_scopeId}> Business school admission </div>`);
            } else {
              return [
                createVNode("div", { class: "font-medium" }, "GMAT Preparation"),
                createVNode("div", { class: "text-sm text-gray-500" }, " Business school admission ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="relative" data-v-19ec67dd><button class="${ssrRenderClass([{
        "bg-[#859484]/15 text-[#859484]": _ctx.$route.path.startsWith("/resources")
      }, "px-4 py-2 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] font-medium rounded-lg transition-all duration-200 flex items-center space-x-1"])}" data-v-19ec67dd><span data-v-19ec67dd>Resources</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:chevron-down",
        class: ["w-4 h-4 transition-transform duration-200", { "rotate-180": unref(showResourcesDropdown) }]
      }, null, _parent));
      _push(`</button>`);
      if (unref(showResourcesDropdown)) {
        _push(`<div class="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50" data-v-19ec67dd>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/resources",
          class: "block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="font-medium" data-v-19ec67dd${_scopeId}>All Resources</div><div class="text-sm text-gray-500" data-v-19ec67dd${_scopeId}> Complete resource library </div>`);
            } else {
              return [
                createVNode("div", { class: "font-medium" }, "All Resources"),
                createVNode("div", { class: "text-sm text-gray-500" }, " Complete resource library ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/resources/brochures",
          class: "block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="font-medium" data-v-19ec67dd${_scopeId}>Brochures</div><div class="text-sm text-gray-500" data-v-19ec67dd${_scopeId}>Download our guides</div>`);
            } else {
              return [
                createVNode("div", { class: "font-medium" }, "Brochures"),
                createVNode("div", { class: "text-sm text-gray-500" }, "Download our guides")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/resources/study-guides",
          class: "block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="font-medium" data-v-19ec67dd${_scopeId}>Study Guides</div><div class="text-sm text-gray-500" data-v-19ec67dd${_scopeId}>Educational materials</div>`);
            } else {
              return [
                createVNode("div", { class: "font-medium" }, "Study Guides"),
                createVNode("div", { class: "text-sm text-gray-500" }, "Educational materials")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/resources/country-guides",
          class: "block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="font-medium" data-v-19ec67dd${_scopeId}>Country Guides</div><div class="text-sm text-gray-500" data-v-19ec67dd${_scopeId}>Study destination info</div>`);
            } else {
              return [
                createVNode("div", { class: "font-medium" }, "Country Guides"),
                createVNode("div", { class: "text-sm text-gray-500" }, "Study destination info")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="relative" data-v-19ec67dd><button class="${ssrRenderClass([{
        "bg-[#859484]/15 text-[#859484]": _ctx.$route.path.startsWith("/contact")
      }, "px-4 py-2 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] font-medium rounded-lg transition-all duration-200 flex items-center space-x-1"])}" data-v-19ec67dd><span data-v-19ec67dd>Contact</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:chevron-down",
        class: ["w-4 h-4 transition-transform duration-200", { "rotate-180": unref(showContactDropdown) }]
      }, null, _parent));
      _push(`</button>`);
      if (unref(showContactDropdown)) {
        _push(`<div class="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50" data-v-19ec67dd>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: "block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="font-medium" data-v-19ec67dd${_scopeId}>Contact Us</div><div class="text-sm text-gray-500" data-v-19ec67dd${_scopeId}>Get in touch</div>`);
            } else {
              return [
                createVNode("div", { class: "font-medium" }, "Contact Us"),
                createVNode("div", { class: "text-sm text-gray-500" }, "Get in touch")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact/office-visit",
          class: "block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="font-medium" data-v-19ec67dd${_scopeId}>Visit Our Office</div><div class="text-sm text-gray-500" data-v-19ec67dd${_scopeId}>Jahi, Abuja location</div>`);
            } else {
              return [
                createVNode("div", { class: "font-medium" }, "Visit Our Office"),
                createVNode("div", { class: "text-sm text-gray-500" }, "Jahi, Abuja location")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact/online-consultation",
          class: "block px-4 py-3 text-gray-700 hover:bg-[#859484]/10 hover:text-[#859484] transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="font-medium" data-v-19ec67dd${_scopeId}>Online Consultation</div><div class="text-sm text-gray-500" data-v-19ec67dd${_scopeId}>Virtual meetings</div>`);
            } else {
              return [
                createVNode("div", { class: "font-medium" }, "Online Consultation"),
                createVNode("div", { class: "text-sm text-gray-500" }, "Virtual meetings")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></nav><div class="hidden lg:flex items-center space-x-4" data-v-19ec67dd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/book-counselling",
        class: "px-2 py-2 border-2 border-[#859484] text-[#859484] hover:bg-[#859484] hover:text-white font-medium rounded-lg transition-all duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Free Counselling `);
          } else {
            return [
              createTextVNode(" Free Counselling ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="lg:hidden" data-v-19ec67dd><button class="p-2 text-gray-700 hover:text-[#859484] hover:bg-gray-100 rounded-lg transition-all duration-200" data-v-19ec67dd>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(isMobileMenuOpen) ? "heroicons:x-mark" : "heroicons:bars-3",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</button></div></div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(isMobileMenuOpen)) {
          _push2(`<div class="fixed inset-0 z-50 lg:hidden" data-v-19ec67dd><div class="fixed inset-0 bg-white/20 backdrop-blur-sm transition-all duration-500 ease-out" data-v-19ec67dd></div><div class="mobile-drawer fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-md shadow-2xl transform translate-x-full transition-all duration-500 ease-out overflow-y-auto border-l border-gray-200/50" data-v-19ec67dd><div class="flex items-center justify-between p-4 border-b border-gray-200" data-v-19ec67dd><div class="flex items-center space-x-3" data-v-19ec67dd><div class="w-8 h-8" data-v-19ec67dd>`);
          _push2(ssrRenderComponent(_component_NuxtImg, {
            src: "/img/main-logo.png",
            alt: "B&S Educational Services logo",
            class: "w-full h-full object-contain",
            width: "32",
            height: "32"
          }, null, _parent));
          _push2(`</div><span class="font-semibold text-gray-900 text-sm" data-v-19ec67dd>B&amp;S Educational</span></div><button class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200" data-v-19ec67dd>`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "heroicons:x-mark",
            class: "w-5 h-5"
          }, null, _parent));
          _push2(`</button></div><div class="p-4 space-y-6" data-v-19ec67dd><div class="space-y-1" data-v-19ec67dd><h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3" data-v-19ec67dd> Navigation </h3><!--[-->`);
          ssrRenderList(mainRoutes, (route2) => {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              key: route2.path,
              to: route2.path,
              class: ["flex items-center px-3 py-3 text-gray-700 hover:text-[#859484] hover:bg-[#859484]/5 font-medium rounded-lg transition-all duration-200", {
                "text-[#859484] bg-[#859484]/10": _ctx.$route.path === route2.path
              }],
              onClick: ($event) => isMobileMenuOpen.value = false
            }, {
              default: withCtx((_, _push3, _parent2, _scopeId) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(route2.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(route2.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push2(`<!--]--></div><div class="space-y-1" data-v-19ec67dd><h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3" data-v-19ec67dd> Services </h3>`);
          _push2(ssrRenderComponent(_component_NuxtLink, {
            to: "/services/counselling",
            class: "flex items-center px-3 py-2 text-sm text-gray-600 hover:text-[#859484] hover:bg-[#859484]/5 rounded-lg transition-all duration-200",
            onClick: ($event) => isMobileMenuOpen.value = false
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(` Admission Counselling `);
              } else {
                return [
                  createTextVNode(" Admission Counselling ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(ssrRenderComponent(_component_NuxtLink, {
            to: "/services/visa-assistance",
            class: "flex items-center px-3 py-2 text-sm text-gray-600 hover:text-[#859484] hover:bg-[#859484]/5 rounded-lg transition-all duration-200",
            onClick: ($event) => isMobileMenuOpen.value = false
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(` Visa Assistance `);
              } else {
                return [
                  createTextVNode(" Visa Assistance ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(`</div><div class="space-y-1" data-v-19ec67dd><h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3" data-v-19ec67dd> Test Preparation </h3>`);
          _push2(ssrRenderComponent(_component_NuxtLink, {
            to: "/coaching/ielts",
            class: "flex items-center px-3 py-2 text-sm text-gray-600 hover:text-[#859484] hover:bg-[#859484]/5 rounded-lg transition-all duration-200",
            onClick: ($event) => isMobileMenuOpen.value = false
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(` IELTS Preparation `);
              } else {
                return [
                  createTextVNode(" IELTS Preparation ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(ssrRenderComponent(_component_NuxtLink, {
            to: "/coaching/toefl",
            class: "flex items-center px-3 py-2 text-sm text-gray-600 hover:text-[#859484] hover:bg-[#859484]/5 rounded-lg transition-all duration-200",
            onClick: ($event) => isMobileMenuOpen.value = false
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(` TOEFL Preparation `);
              } else {
                return [
                  createTextVNode(" TOEFL Preparation ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(ssrRenderComponent(_component_NuxtLink, {
            to: "/coaching/gre",
            class: "flex items-center px-3 py-2 text-sm text-gray-600 hover:text-[#859484] hover:bg-[#859484]/5 rounded-lg transition-all duration-200",
            onClick: ($event) => isMobileMenuOpen.value = false
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(` GRE Preparation `);
              } else {
                return [
                  createTextVNode(" GRE Preparation ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(ssrRenderComponent(_component_NuxtLink, {
            to: "/coaching/gmat",
            class: "flex items-center px-3 py-2 text-sm text-gray-600 hover:text-[#859484] hover:bg-[#859484]/5 rounded-lg transition-all duration-200",
            onClick: ($event) => isMobileMenuOpen.value = false
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(` GMAT Preparation `);
              } else {
                return [
                  createTextVNode(" GMAT Preparation ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(`</div><div class="pt-4 space-y-3 border-t border-gray-200" data-v-19ec67dd>`);
          _push2(ssrRenderComponent(_component_NuxtLink, {
            to: "/book-counselling",
            class: "block w-full px-6 py-3 border-2 border-[#859484] text-[#859484] hover:bg-[#859484] hover:text-white font-medium rounded-lg transition-all duration-200 text-center",
            onClick: ($event) => isMobileMenuOpen.value = false
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(` Book Free Counselling `);
              } else {
                return [
                  createTextVNode(" Book Free Counselling ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(`</div><div class="pt-4 border-t border-gray-200" data-v-19ec67dd><h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3" data-v-19ec67dd> Get in Touch </h3><div class="space-y-2 text-sm text-gray-600" data-v-19ec67dd><p class="flex items-center space-x-2" data-v-19ec67dd>`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "heroicons:map-pin",
            class: "w-4 h-4 text-[#859484]"
          }, null, _parent));
          _push2(`<span data-v-19ec67dd>Jahi, Abuja</span></p>`);
          _push2(ssrRenderComponent(_component_NuxtLink, {
            to: "/contact",
            class: "flex items-center space-x-2 hover:text-[#859484] transition-colors duration-200",
            onClick: ($event) => isMobileMenuOpen.value = false
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_Icon, {
                  name: "heroicons:envelope",
                  class: "w-4 h-4 text-[#859484]"
                }, null, _parent2, _scopeId));
                _push3(`<span data-v-19ec67dd${_scopeId}>Contact Us</span>`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "heroicons:envelope",
                    class: "w-4 h-4 text-[#859484]"
                  }),
                  createVNode("span", null, "Contact Us")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(`</div></div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-19ec67dd"]]), { __name: "AppHeader" });
const _sfc_main$1 = {
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = computed(() => (/* @__PURE__ */ new Date()).getFullYear());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_UIcon = _sfc_main$3;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-[#2d332a] text-white" }, _attrs))}><div class="py-12 px-6 md:px-8 lg:px-16"><div class="max-w-6xl mx-auto"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div class="lg:col-span-1"><div class="mb-4">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/bs-secondary.png",
        alt: "B&S Educational Services Logo",
        width: "140",
        height: "auto",
        loading: "lazy"
      }, null, _parent));
      _push(`</div><p class="text-gray-300 text-sm leading-relaxed mb-4"> B&amp;S Educational Services helps students actualize their study abroad dreams through expert counselling and visa processing. </p><div class="flex items-center gap-2 text-xs text-[#ACBEA3]"><span class="w-2 h-2 bg-[#ACBEA3] rounded-full"></span><span>Trusted by 500+ students</span></div></div><div><h4 class="text-white font-medium mb-4">Quick Links</h4><nav><ul class="space-y-2"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-gray-300 hover:text-[#ACBEA3] text-sm transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "text-gray-300 hover:text-[#ACBEA3] text-sm transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About Us `);
          } else {
            return [
              createTextVNode(" About Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: "text-gray-300 hover:text-[#ACBEA3] text-sm transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Services `);
          } else {
            return [
              createTextVNode(" Services ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/apply",
        class: "text-gray-300 hover:text-[#ACBEA3] text-sm transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Apply Now `);
          } else {
            return [
              createTextVNode(" Apply Now ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "text-gray-300 hover:text-[#ACBEA3] text-sm transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact `);
          } else {
            return [
              createTextVNode(" Contact ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav></div><div><h4 class="text-white font-medium mb-4">Contact Info</h4><div class="space-y-3"><div class="text-sm"><p class="text-gray-300 mb-1">Address</p><p class="text-gray-400 text-xs"> 12 Ogundana Street, Allen Avenue<br> Ikeja, Lagos, Nigeria </p></div><div class="text-sm"><p class="text-gray-300 mb-1">Phone</p><a href="tel:+2349012345678" class="text-[#ACBEA3] hover:text-white text-xs transition-colors"> +234 901 234 5678 </a></div><div class="text-sm"><p class="text-gray-300 mb-1">Email</p><a href="mailto:info@bs-education.com" class="text-[#ACBEA3] hover:text-white text-xs transition-colors"> info@bs-education.com </a></div></div></div><div><h4 class="text-white font-medium mb-4">Follow Us</h4><div class="flex gap-3"><a href="#" class="w-8 h-8 bg-[#2d332a] hover:bg-[#ACBEA3] rounded-lg flex items-center justify-center transition-colors group">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-simple-icons-instagram",
        class: "w-4 h-4 text-gray-300 group-hover:text-gray-900"
      }, null, _parent));
      _push(`</a><a href="#" class="w-8 h-8 bg-[#2d332a] hover:bg-[#ACBEA3] rounded-lg flex items-center justify-center transition-colors group">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-simple-icons-facebook",
        class: "w-4 h-4 text-gray-300 group-hover:text-gray-900"
      }, null, _parent));
      _push(`</a><a href="#" class="w-8 h-8 bg-[#2d332a] hover:bg-[#ACBEA3] rounded-lg flex items-center justify-center transition-colors group">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-simple-icons-linkedin",
        class: "w-4 h-4 text-gray-300 group-hover:text-gray-900"
      }, null, _parent));
      _push(`</a><a href="#" class="w-8 h-8 bg-[#2d332a] hover:bg-[#ACBEA3] rounded-lg flex items-center justify-center transition-colors group">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-simple-icons-twitter",
        class: "w-4 h-4 text-gray-300 group-hover:text-gray-900"
      }, null, _parent));
      _push(`</a></div></div></div></div></div><div class="border-t border-white bg-[#2d332a]"><div class="max-w-6xl mx-auto px-6 md:px-8 lg:px-16 py-4"><div class="flex flex-col md:flex-row justify-between items-center gap-3"><div class="flex flex-wrap items-center gap-4 text-xs text-gray-100"><p>© ${ssrInterpolate(currentYear.value)} B&amp;S Educational Services. All rights reserved.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "hover:text-[#ACBEA3] transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Privacy Policy `);
          } else {
            return [
              createTextVNode(" Privacy Policy ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/terms",
        class: "hover:text-[#ACBEA3] transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Terms of Service `);
          } else {
            return [
              createTextVNode(" Terms of Service ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-2 text-xs text-gray-200"><span>Made by OPS, Nigeria</span></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  const _component_AppFooter = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-screen overflow-x-hidden" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AppHeader, { class: "z-50" }, null, _parent));
  _push(`<main>`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</main>`);
  _push(ssrRenderComponent(_component_AppFooter, { class: "z-50" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default--pSQ_wHY.mjs.map
