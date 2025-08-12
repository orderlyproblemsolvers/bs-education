import { _ as __nuxt_component_0 } from './NuxtImg-jLe0oRQc.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, p as useSeoMeta } from './server.mjs';
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
    useSeoMeta({
      title: "Study Abroad Services | B&S Educational Services",
      description: "Transform your future with world-class education. Professional study abroad services including admissions, visa assistance, and scholarship guidance.",
      ogTitle: "Study Abroad Services | B&S Educational Services",
      ogDescription: "Transform your future with world-class education. Professional study abroad services including admissions, visa assistance, and scholarship guidance.",
      ogType: "website"
    });
    const servicesWithStory = [
      {
        title: "Educational Counselling",
        subtitle: "Your Story Begins Here",
        description: "Every great journey starts with understanding your unique potential. Our expert counsellors help you discover the perfect academic path that aligns with your dreams and career goals.",
        icon: "academic-cap",
        iconBg: "bg-[#5d6b56]"
      },
      {
        title: "Course & University Selection",
        subtitle: "Find Your Perfect Match",
        description: "With thousands of programs worldwide, finding the right fit can be overwhelming. We match you with universities and courses that complement your aspirations and academic background.",
        icon: "building-library",
        iconBg: "bg-[#6b7a6a]"
      },
      {
        title: "Admissions Support",
        subtitle: "Stand Out From The Crowd",
        description: "Craft compelling applications that showcase your unique story. From essays to portfolios, we help you present your best self to admissions committees.",
        icon: "document-text",
        iconBg: "bg-[#EB6534]"
      },
      {
        title: "Visa Assistance",
        subtitle: "Navigate With Confidence",
        description: "Visa processes can be complex and stressful. Our experienced team guides you through every requirement, ensuring your application is complete and compelling.",
        icon: "identification",
        iconBg: "bg-[#5d6b56]"
      },
      {
        title: "Scholarship Assistance",
        subtitle: "Unlock Financial Freedom",
        description: "Don't let finances limit your dreams. We help you discover and apply for scholarships, grants, and funding opportunities that make education affordable.",
        icon: "currency-dollar",
        iconBg: "bg-[#6b7a6a]"
      },
      {
        title: "Study-abroad Loan Support",
        subtitle: "Invest In Your Future",
        description: "Explore flexible financing options that make your education investment manageable. We connect you with trusted lenders and favorable terms.",
        icon: "banknotes",
        iconBg: "bg-[#EB6534]"
      },
      {
        title: "Pre-departure Services",
        subtitle: "Prepare For Success",
        description: "Get ready for your new adventure with comprehensive pre-departure briefings, cultural orientation, and practical guidance for life abroad.",
        icon: "airplane-takeoff",
        iconBg: "bg-[#5d6b56]"
      },
      {
        title: "Post-arrival Support",
        subtitle: "You're Never Alone",
        description: "Your support doesn't end at departure. We provide ongoing assistance to help you settle in, overcome challenges, and thrive in your new environment.",
        icon: "heart",
        iconBg: "bg-[#6b7a6a]"
      },
      {
        title: "Accommodation Arrangements",
        subtitle: "Home Away From Home",
        description: "Find safe, comfortable housing that fits your budget and lifestyle. From campus dormitories to private apartments, we help you secure the perfect place.",
        icon: "home",
        iconBg: "bg-[#EB6534]"
      }
    ];
    const targetCountries = [
      { name: "United Kingdom", flag: "🇬🇧", universities: "150+ Universities" },
      { name: "United States", flag: "🇺🇸", universities: "200+ Universities" },
      { name: "Canada", flag: "🇨🇦", universities: "100+ Universities" },
      { name: "Australia", flag: "🇦🇺", universities: "80+ Universities" },
      { name: "New Zealand", flag: "🇳🇿", universities: "25+ Universities" },
      { name: "Europe", flag: "🇪🇺", universities: "300+ Universities" },
      { name: "Asia", flag: "🌏", universities: "150+ Universities" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white" }, _attrs))} data-v-05f52b79><div class="relative overflow-hidden text-white" data-v-05f52b79>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/countries.jpg",
        alt: "Study abroad destinations",
        class: "absolute inset-0 w-full h-full object-cover",
        loading: "eager",
        preload: ""
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-black/40" data-v-05f52b79></div><div class="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 z-10" data-v-05f52b79><div class="text-center" data-v-05f52b79><div class="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium text-white mb-6" data-v-05f52b79> Since 2007 • Your Global Education Partner </div><h1 class="text-4xl md:text-5xl font-bold mb-6 text-white" style="${ssrRenderStyle({ "line-height": "1.2" })}" data-v-05f52b79> Your Dreams Have No Borders </h1><p class="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto" style="${ssrRenderStyle({ "line-height": "1.6" })}" data-v-05f52b79> Transform your future with world-class education. We&#39;ve helped thousands of students turn their study abroad dreams into reality across 7+ countries. </p><div class="flex flex-col sm:flex-row gap-4 justify-center" data-v-05f52b79><button class="px-8 py-3 bg-[#EB6534] text-white font-medium rounded-lg shadow-sm hover:bg-[#d55529] hover:shadow-md transition-all duration-200" data-v-05f52b79> Start Your Journey → </button><button class="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-[#5d6b56] transition-all duration-200" data-v-05f52b79> Book Free Consultation </button></div></div></div></div><div class="bg-white border-b border-gray-200" data-v-05f52b79><div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12" data-v-05f52b79><div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-v-05f52b79><div class="space-y-2" data-v-05f52b79><div class="text-3xl font-bold text-[#5d6b56]" data-v-05f52b79>17+</div><div class="text-sm text-gray-600" data-v-05f52b79>Years of Excellence</div></div><div class="space-y-2" data-v-05f52b79><div class="text-3xl font-bold text-[#5d6b56]" data-v-05f52b79>5000+</div><div class="text-sm text-gray-600" data-v-05f52b79>Dreams Realized</div></div><div class="space-y-2" data-v-05f52b79><div class="text-3xl font-bold text-[#5d6b56]" data-v-05f52b79>7+</div><div class="text-sm text-gray-600" data-v-05f52b79>Countries</div></div><div class="space-y-2" data-v-05f52b79><div class="text-3xl font-bold text-[#5d6b56]" data-v-05f52b79>95%</div><div class="text-sm text-gray-600" data-v-05f52b79>Success Rate</div></div></div></div></div><div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20" data-v-05f52b79><div class="text-center mb-16" data-v-05f52b79><h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-v-05f52b79> Every Great Journey Begins With <span class="text-[#5d6b56]" data-v-05f52b79>One Step</span></h2><p class="text-lg text-gray-600 max-w-3xl mx-auto" data-v-05f52b79> From your first dream to graduation day, we&#39;re with you every step of the way. Here&#39;s how we turn aspirations into achievements. </p></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-v-05f52b79><!--[-->`);
      ssrRenderList(servicesWithStory, (service, index2) => {
        _push(`<div class="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-v-05f52b79><div class="flex items-start space-x-4 mb-4" data-v-05f52b79><div class="${ssrRenderClass([service.iconBg, "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"])}" data-v-05f52b79><div class="w-6 h-6 bg-white rounded-sm" data-v-05f52b79></div></div><div data-v-05f52b79><h3 class="text-lg font-semibold text-gray-900 mb-1" data-v-05f52b79>${ssrInterpolate(service.title)}</h3><p class="text-sm text-gray-500" data-v-05f52b79>${ssrInterpolate(service.subtitle)}</p></div></div><p class="text-gray-600 mb-4" style="${ssrRenderStyle({ "line-height": "1.6" })}" data-v-05f52b79>${ssrInterpolate(service.description)}</p></div>`);
      });
      _push(`<!--]--></div><div class="bg-[#f4f5f3] rounded-xl p-8 md:p-12 mb-16" data-v-05f52b79><div class="text-center mb-12" data-v-05f52b79><h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-v-05f52b79> Your World of Opportunities </h3><p class="text-lg text-gray-600 max-w-2xl mx-auto" data-v-05f52b79> Choose from top-ranked universities across multiple continents. Your perfect match is waiting. </p></div><div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4" data-v-05f52b79><!--[-->`);
      ssrRenderList(targetCountries, (country) => {
        _push(`<div class="bg-white rounded-lg p-4 text-center hover:shadow transition-all duration-300 hover:-translate-y-1 cursor-pointer" data-v-05f52b79><div class="text-3xl mb-2" data-v-05f52b79>${ssrInterpolate(country.flag)}</div><div class="text-sm font-medium text-gray-900" data-v-05f52b79>${ssrInterpolate(country.name)}</div><div class="text-xs text-gray-500 mt-1" data-v-05f52b79>${ssrInterpolate(country.universities)}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-gradient-to-r from-[#5d6b56] to-[#6b7a6a] rounded-xl p-8 md:p-12 text-center text-white" data-v-05f52b79><h3 class="text-3xl md:text-4xl font-bold mb-4" data-v-05f52b79> Ready to Write Your Success Story? </h3><p class="text-lg text-white/90 mb-8 max-w-2xl mx-auto" style="${ssrRenderStyle({ "line-height": "1.6" })}" data-v-05f52b79> Join thousands of students who trusted us with their dreams. Your journey to global education starts with a single conversation. </p><div class="flex flex-col sm:flex-row gap-4 justify-center mb-8" data-v-05f52b79><button class="px-8 py-3 bg-[#EB6534] text-white font-medium rounded-lg shadow-sm hover:bg-[#d55529] transition-all duration-200" data-v-05f52b79> Get Free Consultation 📞 </button><button class="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-[#5d6b56] transition-all duration-200" data-v-05f52b79> Download Guide ↓ </button></div><div class="grid md:grid-cols-3 gap-6 pt-8 border-t border-white/20" data-v-05f52b79><div class="flex items-center justify-center space-x-3" data-v-05f52b79><div class="w-5 h-5 bg-white/20 rounded" data-v-05f52b79></div><span class="text-white/90" data-v-05f52b79>+234 806 544 2707</span></div><div class="flex items-center justify-center space-x-3" data-v-05f52b79><div class="w-5 h-5 bg-white/20 rounded" data-v-05f52b79></div><span class="text-white/90" data-v-05f52b79>info@bs-education.com</span></div><div class="flex items-center justify-center space-x-3" data-v-05f52b79><div class="w-5 h-5 bg-white/20 rounded" data-v-05f52b79></div><span class="text-white/90" data-v-05f52b79>Abuja, Nigeria</span></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-05f52b79"]]);

export { index as default };
//# sourceMappingURL=index-CbS5tqJb.mjs.map
