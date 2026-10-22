<template>
  <div class="min-h-screen bg-[#f4f5f3] p-4 sm:p-6">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 mb-6"
      >
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div class="flex items-center">
            <div class="bg-[#5F7A55] p-3 rounded-xl mr-4 shrink-0">
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </div>
            <div>
              <h1 class="text-2xl font-bold text-gray-900">Create New Event</h1>
              <p class="text-gray-600 mt-1">
                Add a new educational programme to your events calendar
              </p>
            </div>
          </div>
          <button
            type="button"
            @click="goBack"
            :class="secondaryBtn"
            class="flex items-center justify-center space-x-2 px-4 py-2"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            <span>Back to Events</span>
          </button>
        </div>
      </div>

      <!-- Main Form -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200">
        <div class="p-4 sm:p-8">
          <form
            novalidate
            @submit.prevent="handleCreateEvent"
            class="space-y-10"
          >
            <!-- ── BASIC INFORMATION ── -->
            <section class="space-y-6" aria-labelledby="basic-heading">
              <h2
                id="basic-heading"
                class="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2"
              >
                Basic Information
              </h2>

              <!-- Title -->
              <div>
                <label for="event-title" :class="labelCls">
                  Event Title <span class="text-red-600" aria-hidden="true">*</span>
                </label>
                <input
                  id="event-title"
                  v-model="formData.title"
                  type="text"
                  aria-required="true"
                  :aria-invalid="!!errors.title"
                  :aria-describedby="errors.title ? 'event-title-error' : null"
                  :class="inputClass(errors.title)"
                  placeholder="e.g., Introduction to Digital Marketing"
                />
                <p :class="hintCls">
                  Use a clear title that highlights the main benefit.
                </p>
                <p
                  v-if="errors.title"
                  id="event-title-error"
                  role="alert"
                  :class="errorCls"
                >
                  {{ errors.title }}
                </p>
              </div>

              <!-- Duration toggle -->
              <div>
                <span :class="labelCls" id="duration-label">Event Duration</span>
                <div
                  role="group"
                  aria-labelledby="duration-label"
                  class="flex rounded-lg border border-gray-300 overflow-hidden w-fit"
                >
                  <button
                    type="button"
                    :aria-pressed="formData.event_type === 'single'"
                    @click="formData.event_type = 'single'"
                    :class="formData.event_type === 'single' ? segActive : segIdle"
                    class="px-5 py-2 text-sm font-medium transition-colors"
                  >
                    Single Day
                  </button>
                  <button
                    type="button"
                    :aria-pressed="formData.event_type === 'multi'"
                    @click="formData.event_type = 'multi'"
                    :class="formData.event_type === 'multi' ? segActive : segIdle"
                    class="px-5 py-2 text-sm font-medium transition-colors border-l border-gray-300"
                  >
                    Multi Day
                  </button>
                </div>
              </div>

              <!-- Single day -->
              <div
                v-if="formData.event_type === 'single'"
                class="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div>
                  <label for="event-date" :class="labelCls">
                    Date <span class="text-red-600" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="event-date"
                    v-model="formData.event_date"
                    type="date"
                    aria-required="true"
                    :aria-invalid="!!errors.event_date"
                    :aria-describedby="errors.event_date ? 'event-date-error' : null"
                    :class="inputClass(errors.event_date)"
                  />
                  <p
                    v-if="errors.event_date"
                    id="event-date-error"
                    role="alert"
                    :class="errorCls"
                  >
                    {{ errors.event_date }}
                  </p>
                </div>
                <div>
                  <label for="event-start-time" :class="labelCls">
                    Start Time <span class="text-red-600" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="event-start-time"
                    v-model="formData.event_start_time"
                    type="time"
                    aria-required="true"
                    :aria-invalid="!!errors.event_start_time"
                    :aria-describedby="
                      errors.event_start_time ? 'event-start-time-error' : null
                    "
                    :class="inputClass(errors.event_start_time)"
                  />
                  <p
                    v-if="errors.event_start_time"
                    id="event-start-time-error"
                    role="alert"
                    :class="errorCls"
                  >
                    {{ errors.event_start_time }}
                  </p>
                </div>
                <div>
                  <label for="event-end-time" :class="labelCls">
                    End Time <span class="text-red-600" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="event-end-time"
                    v-model="formData.event_end_time"
                    type="time"
                    aria-required="true"
                    :aria-invalid="!!errors.event_end_time"
                    :aria-describedby="
                      errors.event_end_time ? 'event-end-time-error' : null
                    "
                    :class="inputClass(errors.event_end_time)"
                  />
                  <p
                    v-if="errors.event_end_time"
                    id="event-end-time-error"
                    role="alert"
                    :class="errorCls"
                  >
                    {{ errors.event_end_time }}
                  </p>
                </div>
              </div>

              <!-- Multi day -->
              <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="event-date" :class="labelCls">
                    Start Date <span class="text-red-600" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="event-date"
                    v-model="formData.event_date"
                    type="date"
                    aria-required="true"
                    :aria-invalid="!!errors.event_date"
                    :aria-describedby="errors.event_date ? 'event-date-error' : null"
                    :class="inputClass(errors.event_date)"
                  />
                  <p
                    v-if="errors.event_date"
                    id="event-date-error"
                    role="alert"
                    :class="errorCls"
                  >
                    {{ errors.event_date }}
                  </p>
                </div>
                <div>
                  <label for="event-start-time-multi" :class="labelCls">
                    Start Time
                    <span class="text-xs font-normal text-gray-500">(optional)</span>
                  </label>
                  <input
                    id="event-start-time-multi"
                    v-model="formData.event_start_time"
                    type="time"
                    :class="inputClass(false)"
                  />
                </div>
                <div>
                  <label for="event-end-date" :class="labelCls">
                    End Date <span class="text-red-600" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="event-end-date"
                    v-model="formData.event_end_date"
                    type="date"
                    :min="formData.event_date"
                    aria-required="true"
                    :aria-invalid="!!errors.event_end_date"
                    :aria-describedby="
                      errors.event_end_date ? 'event-end-date-error' : null
                    "
                    :class="inputClass(errors.event_end_date)"
                  />
                  <p
                    v-if="errors.event_end_date"
                    id="event-end-date-error"
                    role="alert"
                    :class="errorCls"
                  >
                    {{ errors.event_end_date }}
                  </p>
                </div>
                <div>
                  <label for="event-end-time-multi" :class="labelCls">
                    End Time
                    <span class="text-xs font-normal text-gray-500">(optional)</span>
                  </label>
                  <input
                    id="event-end-time-multi"
                    v-model="formData.event_end_time"
                    type="time"
                    :aria-invalid="!!errors.event_end_time"
                    :aria-describedby="
                      errors.event_end_time ? 'event-end-time-error' : null
                    "
                    :class="inputClass(errors.event_end_time)"
                  />
                  <p
                    v-if="errors.event_end_time"
                    id="event-end-time-error"
                    role="alert"
                    :class="errorCls"
                  >
                    {{ errors.event_end_time }}
                  </p>
                </div>
              </div>

              <div class="-mt-3 space-y-1">
                <p :class="hintCls">
                  Times use your browser's timezone ({{ timezone }}).
                  <span v-if="formData.event_type === 'multi'">
                    Leave times empty for full days.
                  </span>
                </p>
                <p v-if="pastDateWarning" class="text-sm text-amber-700" role="status">
                  This start date is in the past.
                </p>
              </div>

              <!-- Venue -->
              <div>
                <label for="event-venue" :class="labelCls">Venue</label>
                <input
                  id="event-venue"
                  v-model="formData.venue"
                  type="text"
                  :class="inputClass(false)"
                  placeholder="e.g., Main Conference Hall"
                />
              </div>

              <!-- Banner -->
              <div>
                <span :class="labelCls" id="banner-label">
                  Event Banner
                  <span class="ml-2 text-xs font-normal text-gray-500"
                    >(Optional · max 5 MB · JPG, PNG, WEBP)</span
                  >
                </span>

                <input
                  ref="bannerInput"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  class="hidden"
                  tabindex="-1"
                  aria-hidden="true"
                  @change="handleBannerSelect"
                />

                <!-- Drop zone -->
                <div
                  v-if="!bannerPreview"
                  role="button"
                  tabindex="0"
                  aria-labelledby="banner-label"
                  class="border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#5F7A55]"
                  :class="
                    isDraggingBanner
                      ? 'border-[#5F7A55] bg-[#f4f5f3]'
                      : 'border-gray-300 hover:border-[#5F7A55]'
                  "
                  @dragover.prevent="isDraggingBanner = true"
                  @dragleave="isDraggingBanner = false"
                  @drop.prevent="handleBannerDrop"
                  @click="triggerBannerPicker"
                  @keydown.enter.prevent="triggerBannerPicker"
                  @keydown.space.prevent="triggerBannerPicker"
                >
                  <div class="pointer-events-none">
                    <svg
                      class="w-10 h-10 text-gray-500 mx-auto mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <p class="text-sm text-gray-700 font-medium">
                      Drop your banner here or
                      <span class="text-[#4E6646] underline">browse</span>
                    </p>
                    <p class="text-sm text-gray-500 mt-1">
                      Recommended: 1200 × 630 px for best display on all devices
                    </p>
                  </div>
                </div>

                <!-- Preview -->
                <div v-else class="space-y-3">
                  <div
                    class="relative rounded-xl overflow-hidden border border-gray-200"
                  >
                    <img
                      :src="bannerPreview"
                      alt="Event banner preview"
                      class="w-full h-48 object-cover"
                    />
                    <div
                      v-if="bannerUploading"
                      role="status"
                      class="absolute inset-0 bg-black/60 flex flex-col items-center justify-center"
                    >
                      <div class="w-48 bg-gray-700 rounded-full h-2 mb-2">
                        <div
                          class="bg-[#ACBEA3] h-2 rounded-full transition-all"
                          :style="{ width: bannerUploadProgress + '%' }"
                        ></div>
                      </div>
                      <p class="text-white text-sm">
                        Uploading… {{ bannerUploadProgress }}%
                      </p>
                    </div>
                  </div>

                  <div class="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      :disabled="bannerUploading"
                      @click="triggerBannerPicker"
                      :class="secondaryBtn"
                      class="px-4 py-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Replace
                    </button>
                    <button
                      type="button"
                      @click="removeBanner"
                      class="px-4 py-2 text-sm border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      Remove
                    </button>
                    <template v-if="bannerFailed">
                      <span class="text-sm text-red-700">Upload failed.</span>
                      <button
                        type="button"
                        @click="retryBannerUpload"
                        :class="primaryBtn"
                        class="px-4 py-2 text-sm rounded-lg"
                      >
                        Retry upload
                      </button>
                    </template>
                    <span
                      v-else-if="formData.banner_url && !bannerUploading"
                      class="text-sm text-green-700"
                      role="status"
                    >
                      Uploaded
                    </span>
                  </div>
                </div>

                <p v-if="bannerError" role="alert" :class="errorCls">
                  {{ bannerError }}
                </p>
                <p v-if="errors.banner" role="alert" :class="errorCls">
                  {{ errors.banner }}
                </p>
              </div>
            </section>

            <!-- ── DESCRIPTION ── -->
            <section class="space-y-4" aria-labelledby="desc-heading">
              <h2
                id="desc-heading"
                class="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2"
              >
                Event Description
              </h2>

              <div>
                <!-- Toolbar (mousedown.prevent keeps the text selection) -->
                <div
                  role="toolbar"
                  aria-label="Text formatting"
                  class="flex flex-wrap items-center gap-1 p-2 border border-gray-300 rounded-t-lg bg-gray-50"
                >
                  <button
                    type="button"
                    @mousedown.prevent
                    @click="execCmd('bold')"
                    title="Bold"
                    aria-label="Bold"
                    :aria-pressed="activeFormats.bold"
                    :class="[toolbarBtn, activeFormats.bold ? tbActive : tbIdle, 'font-bold']"
                  >
                    B
                  </button>
                  <button
                    type="button"
                    @mousedown.prevent
                    @click="execCmd('italic')"
                    title="Italic"
                    aria-label="Italic"
                    :aria-pressed="activeFormats.italic"
                    :class="[toolbarBtn, activeFormats.italic ? tbActive : tbIdle, 'italic']"
                  >
                    I
                  </button>
                  <button
                    type="button"
                    @mousedown.prevent
                    @click="execCmd('underline')"
                    title="Underline"
                    aria-label="Underline"
                    :aria-pressed="activeFormats.underline"
                    :class="[toolbarBtn, activeFormats.underline ? tbActive : tbIdle, 'underline']"
                  >
                    U
                  </button>
                  <div class="w-px h-5 bg-gray-300 mx-1" aria-hidden="true"></div>
                  <button
                    type="button"
                    @mousedown.prevent
                    @click="execCmd('insertUnorderedList')"
                    title="Bullet list"
                    aria-label="Bullet list"
                    :aria-pressed="activeFormats.ul"
                    :class="[toolbarBtn, activeFormats.ul ? tbActive : tbIdle]"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    @mousedown.prevent
                    @click="execCmd('insertOrderedList')"
                    title="Numbered list"
                    aria-label="Numbered list"
                    :aria-pressed="activeFormats.ol"
                    :class="[toolbarBtn, activeFormats.ol ? tbActive : tbIdle, 'text-xs font-semibold']"
                  >
                    1.
                  </button>
                  <div class="w-px h-5 bg-gray-300 mx-1" aria-hidden="true"></div>
                  <label for="block-format" class="sr-only">Text style</label>
                  <select
                    id="block-format"
                    :value="currentBlock"
                    @change="execFormatBlock"
                    class="text-xs border border-gray-300 rounded px-2 py-1 bg-white focus:ring-1 focus:ring-[#5F7A55]"
                  >
                    <option value="p">Paragraph</option>
                    <option value="h2">Heading 2</option>
                    <option value="h3">Heading 3</option>
                    <option value="blockquote">Quote</option>
                  </select>
                  <div class="w-px h-5 bg-gray-300 mx-1" aria-hidden="true"></div>
                  <button
                    type="button"
                    @mousedown.prevent
                    @click="openLinkPopover"
                    title="Insert link"
                    aria-label="Insert link"
                    :class="[toolbarBtn, tbIdle]"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    @mousedown.prevent
                    @click="execCmd('removeFormat')"
                    title="Clear formatting"
                    aria-label="Clear formatting"
                    :class="[toolbarBtn, tbIdle, 'text-xs px-2']"
                  >
                    Clear
                  </button>
                </div>

                <!-- Inline link popover -->
                <div
                  v-if="linkOpen"
                  class="flex flex-wrap items-center gap-2 p-2 border-x border-b border-gray-300 bg-white"
                >
                  <label for="link-url" class="sr-only">Link URL</label>
                  <input
                    id="link-url"
                    ref="linkInput"
                    v-model="linkUrl"
                    type="url"
                    placeholder="https://example.com"
                    class="flex-1 min-w-[12rem] px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#5F7A55]"
                    @keydown.enter.prevent="applyLink"
                    @keydown.esc.prevent="closeLinkPopover"
                  />
                  <button
                    type="button"
                    @click="applyLink"
                    :class="primaryBtn"
                    class="px-3 py-1.5 text-sm rounded-md"
                  >
                    Add link
                  </button>
                  <button
                    type="button"
                    @click="closeLinkPopover"
                    class="px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <p
                    v-if="linkError"
                    role="alert"
                    class="w-full text-sm text-red-700"
                  >
                    {{ linkError }}
                  </p>
                </div>

                <div
                  ref="descriptionEditor"
                  contenteditable="true"
                  role="textbox"
                  aria-multiline="true"
                  aria-label="Event description"
                  @input="syncDescription"
                  @paste="handlePaste"
                  @blur="saveSelection"
                  class="rich-editor w-full min-h-[140px] px-4 py-3 border border-gray-300 border-t-0 rounded-b-lg focus:ring-2 focus:ring-[#5F7A55] focus:border-transparent transition-colors outline-none text-sm text-gray-800"
                  data-placeholder="Describe what participants will learn and what to expect…"
                ></div>
                <p :class="hintCls">
                  Use headings and lists to make the description easy to scan.
                </p>
              </div>
            </section>

            <!-- ── PRICING ── -->
            <section class="space-y-6" aria-labelledby="pricing-heading">
              <div
                class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-2"
              >
                <h2
                  id="pricing-heading"
                  class="text-lg font-semibold text-gray-900"
                >
                  Pricing
                </h2>
                <div
                  role="group"
                  aria-label="Event pricing"
                  class="flex rounded-lg border border-gray-300 overflow-hidden"
                >
                  <button
                    type="button"
                    :aria-pressed="formData.is_free"
                    @click="setFree(true)"
                    :class="formData.is_free ? segActive : segIdle"
                    class="px-5 py-2 text-sm font-medium transition-colors"
                  >
                    Free
                  </button>
                  <button
                    type="button"
                    :aria-pressed="!formData.is_free"
                    @click="setFree(false)"
                    :class="!formData.is_free ? segActive : segIdle"
                    class="px-5 py-2 text-sm font-medium transition-colors border-l border-gray-300"
                  >
                    Paid
                  </button>
                </div>
              </div>

              <div
                v-if="formData.is_free"
                class="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center"
              >
                <svg
                  class="w-5 h-5 text-green-700 mr-2 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span class="text-green-800 font-medium text-sm"
                  >This event is free for all participants</span
                >
              </div>

              <template v-else>
                <div
                  role="group"
                  aria-label="Pricing mode"
                  class="flex rounded-lg border border-gray-300 overflow-hidden w-fit"
                >
                  <button
                    type="button"
                    :aria-pressed="formData.pricing_mode === 'flat'"
                    @click="formData.pricing_mode = 'flat'"
                    :class="formData.pricing_mode === 'flat' ? segActive : segIdle"
                    class="px-5 py-2 text-sm font-medium transition-colors"
                  >
                    Flat Price
                  </button>
                  <button
                    type="button"
                    :aria-pressed="formData.pricing_mode === 'tiered'"
                    @click="initTieredPricing"
                    :class="formData.pricing_mode === 'tiered' ? segActive : segIdle"
                    class="px-5 py-2 text-sm font-medium transition-colors border-l border-gray-300"
                  >
                    Tiered Pricing
                  </button>
                </div>

                <div class="w-full sm:w-48">
                  <label for="event-currency" :class="labelCls"
                    >Currency <span class="text-red-600" aria-hidden="true">*</span></label
                  >
                  <select
                    id="event-currency"
                    v-model="formData.currency"
                    :class="inputClass(false)"
                  >
                    <option value="₦">NGN (₦)</option>
                    <option value="$">USD ($)</option>
                    <option value="£">GBP (£)</option>
                    <option value="€">EUR (€)</option>
                  </select>
                </div>

                <!-- FLAT -->
                <div v-if="formData.pricing_mode === 'flat'">
                  <label for="event-fee" :class="labelCls"
                    >Admission Fee
                    <span class="text-red-600" aria-hidden="true">*</span></label
                  >
                  <div class="relative w-full sm:w-56">
                    <div
                      class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"
                    >
                      <span class="text-gray-600 text-sm">{{
                        formData.currency
                      }}</span>
                    </div>
                    <input
                      id="event-fee"
                      v-model.number="formData.admission_fee"
                      type="number"
                      step="0.01"
                      min="0.01"
                      inputmode="decimal"
                      aria-required="true"
                      :aria-invalid="!!errors.fee"
                      :aria-describedby="errors.fee ? 'event-fee-error' : null"
                      :class="inputClass(errors.fee)"
                      class="!pl-10"
                      placeholder="0.00"
                    />
                  </div>
                  <p
                    v-if="errors.fee"
                    id="event-fee-error"
                    role="alert"
                    :class="errorCls"
                  >
                    {{ errors.fee }}
                  </p>
                </div>

                <!-- TIERED -->
                <div v-else class="space-y-4">
                  <p :class="hintCls" class="-mt-2">
                    Tiers work well for early-bird or VIP pricing.
                  </p>
                  <div
                    v-for="(tier, ti) in formData.pricing_tiers"
                    :key="ti"
                    class="border border-gray-200 rounded-xl p-4 sm:p-5 bg-gray-50 space-y-4"
                  >
                    <div class="flex flex-col sm:flex-row sm:items-start gap-3">
                      <div class="flex-1">
                        <input
                          v-model="tier.name"
                          type="text"
                          :aria-label="`Tier ${ti + 1} name`"
                          :aria-invalid="!!errors.tiers[ti]?.name"
                          placeholder="Tier name (e.g. Early Bird, VIP)"
                          :class="[
                            'w-full px-3 py-2 border rounded-lg text-sm font-medium focus:ring-1 focus:ring-[#5F7A55] focus:border-transparent',
                            errors.tiers[ti]?.name
                              ? 'border-red-400 ring-1 ring-red-300'
                              : 'border-gray-300',
                          ]"
                        />
                        <p
                          v-if="errors.tiers[ti]?.name"
                          role="alert"
                          :class="errorCls"
                        >
                          {{ errors.tiers[ti].name }}
                        </p>
                      </div>
                      <div class="sm:w-40">
                        <div class="relative">
                          <span
                            class="absolute inset-y-0 left-3 flex items-center text-gray-600 text-sm pointer-events-none"
                            >{{ formData.currency }}</span
                          >
                          <input
                            v-model.number="tier.price"
                            type="number"
                            step="0.01"
                            min="0.01"
                            inputmode="decimal"
                            :aria-label="`Tier ${ti + 1} price`"
                            :aria-invalid="!!errors.tiers[ti]?.price"
                            placeholder="0.00"
                            :class="[
                              'w-full pl-8 pr-3 py-2 border rounded-lg text-sm focus:ring-1 focus:ring-[#5F7A55] focus:border-transparent',
                              errors.tiers[ti]?.price
                                ? 'border-red-400 ring-1 ring-red-300'
                                : 'border-gray-300',
                            ]"
                          />
                        </div>
                        <p
                          v-if="errors.tiers[ti]?.price"
                          role="alert"
                          :class="errorCls"
                        >
                          {{ errors.tiers[ti].price }}
                        </p>
                      </div>
                      <button
                        type="button"
                        @click="removeTier(ti)"
                        :disabled="formData.pricing_tiers.length === 1"
                        :title="
                          formData.pricing_tiers.length === 1
                            ? 'At least one tier is required'
                            : 'Remove tier'
                        "
                        :aria-label="`Remove tier ${ti + 1}`"
                        class="self-end sm:self-auto text-red-600 hover:text-red-700 p-2 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <svg
                          class="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <div>
                      <span
                        class="text-xs font-medium text-gray-600 uppercase tracking-wide mb-2 block"
                        >What's included</span
                      >
                      <div class="space-y-2">
                        <div
                          v-for="(perk, pi) in tier.perks"
                          :key="pi"
                          class="flex items-center gap-2"
                        >
                          <svg
                            class="w-4 h-4 text-[#5F7A55] shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <input
                            v-model="tier.perks[pi]"
                            type="text"
                            :aria-label="`Tier ${ti + 1} included item ${pi + 1}`"
                            placeholder="e.g., Access to all sessions"
                            class="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#5F7A55] focus:border-transparent bg-white"
                          />
                          <button
                            type="button"
                            @click="removePerk(ti, pi)"
                            :aria-label="`Remove included item ${pi + 1} from tier ${ti + 1}`"
                            class="text-gray-500 hover:text-red-600 shrink-0 p-1"
                          >
                            <svg
                              class="w-3.5 h-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                        <button
                          type="button"
                          @click="addPerk(ti)"
                          class="text-sm text-[#4E6646] hover:text-[#3F5438] font-medium mt-1 flex items-center gap-1"
                        >
                          <svg
                            class="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                          Add item
                        </button>
                      </div>
                    </div>

                    <div>
                      <label
                        :for="`tier-desc-${ti}`"
                        class="text-xs font-medium text-gray-600 uppercase tracking-wide mb-1 block"
                        >Description (optional)</label
                      >
                      <input
                        :id="`tier-desc-${ti}`"
                        v-model="tier.description"
                        type="text"
                        placeholder="Short tagline for this tier"
                        class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:ring-1 focus:ring-[#5F7A55] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    @click="addTier"
                    class="flex items-center gap-2 text-sm text-[#4E6646] hover:text-[#3F5438] font-medium"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    Add Tier
                  </button>
                </div>
              </template>
            </section>

            <!-- ── REGISTRATION FORM FIELDS ── -->
            <section class="space-y-6" aria-labelledby="reg-heading">
              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-gray-200 pb-2"
              >
                <div>
                  <h2 id="reg-heading" class="text-lg font-semibold text-gray-900">
                    Registration Form
                  </h2>
                  <p class="text-sm text-gray-500 mt-0.5">
                    Use the handle or arrow buttons to reorder · Full Name and
                    Email are always collected
                  </p>
                </div>
                <div class="flex items-center gap-2">
                  <label for="new-field-type" class="sr-only">New field type</label>
                  <select
                    id="new-field-type"
                    v-model="newFieldType"
                    class="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-[#5F7A55] bg-white"
                  >
                    <option v-for="(label, key) in FIELD_LABELS" :key="key" :value="key">
                      {{ label }}
                    </option>
                  </select>
                  <button
                    type="button"
                    @click="addFormField"
                    :class="primaryBtn"
                    class="flex items-center space-x-2 text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                    <span>Add Field</span>
                  </button>
                </div>
              </div>

              <!-- Undo bar -->
              <div
                v-if="lastRemoved"
                role="status"
                class="flex items-center justify-between gap-3 bg-gray-900 text-white text-sm rounded-lg px-4 py-3"
              >
                <span>
                  Removed
                  “{{ lastRemoved.field.label || "Untitled field" }}”
                </span>
                <button
                  type="button"
                  @click="undoRemove"
                  class="font-semibold underline hover:no-underline"
                >
                  Undo
                </button>
              </div>

              <div
                class="space-y-3"
                @dragover.prevent
                @drop.prevent="onDropField"
              >
                <div
                  v-for="(field, index) in formData.form_fields"
                  :key="field._id"
                  :draggable="dragArmed === index"
                  @dragstart="onDragStart($event, index)"
                  @dragend="onDragEnd"
                  @dragover.prevent="dragOverIndex = index"
                  @dragleave="dragOverIndex = null"
                  @drop.prevent="onDropOnField($event, index)"
                  :class="[
                    'border rounded-xl bg-white transition-all',
                    dragOverIndex === index
                      ? 'border-[#5F7A55] ring-2 ring-[#5F7A55]/30'
                      : 'border-gray-200',
                    draggingIndex === index ? 'opacity-40' : '',
                  ]"
                >
                  <div class="flex flex-wrap items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3">
                    <!-- Drag handle (only this arms dragging) -->
                    <span
                      class="text-gray-500 cursor-grab shrink-0 p-1"
                      title="Drag to reorder"
                      aria-hidden="true"
                      @mousedown="dragArmed = index"
                      @mouseup="dragArmed = null"
                    >
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="9" cy="6" r="1.5" />
                        <circle cx="15" cy="6" r="1.5" />
                        <circle cx="9" cy="12" r="1.5" />
                        <circle cx="15" cy="12" r="1.5" />
                        <circle cx="9" cy="18" r="1.5" />
                        <circle cx="15" cy="18" r="1.5" />
                      </svg>
                    </span>

                    <!-- Up / down -->
                    <div class="flex flex-col shrink-0">
                      <button
                        type="button"
                        @click="moveField(index, -1)"
                        :disabled="index === 0"
                        :aria-label="`Move field ${index + 1} up`"
                        class="text-gray-500 hover:text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed leading-none"
                      >
                        <svg class="w-4 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        @click="moveField(index, 1)"
                        :disabled="index === formData.form_fields.length - 1"
                        :aria-label="`Move field ${index + 1} down`"
                        class="text-gray-500 hover:text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed leading-none"
                      >
                        <svg class="w-4 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    <input
                      :id="`${field._id}-label`"
                      v-model="field.label"
                      type="text"
                      :aria-label="`Field ${index + 1} label`"
                      :aria-invalid="!!errors.fields[field._id]?.label"
                      placeholder="Field label"
                      :class="[
                        'flex-1 min-w-[10rem] px-3 py-1.5 border rounded-md text-sm focus:ring-1 focus:ring-[#5F7A55] focus:border-transparent',
                        errors.fields[field._id]?.label
                          ? 'border-red-400 ring-1 ring-red-300'
                          : 'border-gray-300',
                      ]"
                    />

                    <select
                      v-model="field.type"
                      @change="onFieldTypeChange(field)"
                      :aria-label="`Field ${index + 1} type`"
                      class="text-xs px-2 py-1.5 rounded border border-gray-300 bg-white text-gray-700 focus:ring-1 focus:ring-[#5F7A55]"
                    >
                      <option v-for="(label, key) in FIELD_LABELS" :key="key" :value="key">
                        {{ label }}
                      </option>
                    </select>

                    <label
                      class="flex items-center text-sm text-gray-700 whitespace-nowrap cursor-pointer"
                    >
                      <input
                        v-model="field.required"
                        type="checkbox"
                        class="mr-1.5 text-[#5F7A55] focus:ring-[#5F7A55] rounded"
                      />
                      Required
                    </label>

                    <button
                      type="button"
                      @click="field._expanded = !field._expanded"
                      :aria-expanded="!!field._expanded"
                      :aria-controls="`${field._id}-options`"
                      :aria-label="field._expanded ? 'Hide field options' : 'Show field options'"
                      class="text-gray-500 hover:text-gray-800 p-1 transition-colors"
                    >
                      <svg
                        class="w-4 h-4 transition-transform"
                        :class="{ 'rotate-180': field._expanded }"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      @click="removeFormField(index)"
                      :aria-label="`Delete field ${field.label || index + 1}`"
                      class="text-red-600 hover:text-red-700 p-1 transition-colors"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <p
                    v-if="errors.fields[field._id]?.label"
                    role="alert"
                    :class="errorCls"
                    class="px-4 pb-3 -mt-1"
                  >
                    {{ errors.fields[field._id].label }}
                  </p>

                  <div
                    v-if="field._expanded"
                    :id="`${field._id}-options`"
                    class="px-4 pb-4 border-t border-gray-100 pt-3 space-y-3"
                  >
                    <div v-if="supportsPlaceholder(field.type)">
                      <label
                        :for="`${field._id}-placeholder`"
                        class="text-xs text-gray-600 font-medium mb-1 block"
                        >Placeholder / helper text</label
                      >
                      <input
                        :id="`${field._id}-placeholder`"
                        v-model="field.placeholder"
                        type="text"
                        placeholder="Hint shown inside the field"
                        class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#5F7A55] focus:border-transparent"
                      />
                    </div>

                    <div v-if="field.type === 'select' || field.type === 'radio'">
                      <label
                        :for="`${field._id}-choices`"
                        class="text-xs text-gray-600 font-medium mb-1 block"
                        >Options (one per line, at least 2)</label
                      >
                      <textarea
                        :id="`${field._id}-choices`"
                        v-model="field.optionsRaw"
                        rows="3"
                        :aria-invalid="!!errors.fields[field._id]?.options"
                        placeholder="Option 1&#10;Option 2&#10;Option 3"
                        :class="[
                          'w-full px-3 py-2 text-sm border rounded-lg focus:ring-1 focus:ring-[#5F7A55] focus:border-transparent',
                          errors.fields[field._id]?.options
                            ? 'border-red-400 ring-1 ring-red-300'
                            : 'border-gray-300',
                        ]"
                      ></textarea>
                      <p
                        v-if="errors.fields[field._id]?.options"
                        role="alert"
                        :class="errorCls"
                      >
                        {{ errors.fields[field._id].options }}
                      </p>
                    </div>

                    <div v-if="field.type === 'file'">
                      <label
                        :for="`${field._id}-accept`"
                        class="text-xs text-gray-600 font-medium mb-1 block"
                        >Accepted file types</label
                      >
                      <input
                        :id="`${field._id}-accept`"
                        v-model="field.accept"
                        type="text"
                        placeholder=".pdf,.docx,.jpg"
                        class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#5F7A55] focus:border-transparent"
                      />
                    </div>

                    <p
                      v-if="
                        !supportsPlaceholder(field.type) &&
                        field.type !== 'select' &&
                        field.type !== 'radio' &&
                        field.type !== 'file'
                      "
                      class="text-sm text-gray-500"
                    >
                      No extra options for this field type.
                    </p>
                  </div>
                </div>

                <div
                  v-if="formData.form_fields.length === 0"
                  class="text-center py-8 border-2 border-dashed border-gray-200 rounded-xl"
                >
                  <p class="text-sm text-gray-600 mb-1">No extra fields added yet</p>
                  <p class="text-sm text-gray-500">
                    Only add fields you truly need — shorter forms convert better.
                    Choose a type above and select "Add Field".
                  </p>
                </div>
              </div>
            </section>

            <!-- ── ACTIONS (sticky) ── -->
            <div
              class="sticky bottom-0 z-20 -mx-4 sm:-mx-8 -mb-4 sm:-mb-8 px-4 sm:px-8 py-4 bg-white/95 backdrop-blur border-t border-gray-200 rounded-b-xl"
            >
              <p
                v-if="attempted && hasErrors"
                role="alert"
                class="text-sm text-red-700 mb-3"
              >
                Please fix the highlighted fields before creating the event.
              </p>
              <div class="flex flex-col-reverse sm:flex-row gap-3">
                <button
                  type="button"
                  @click="goBack"
                  :class="secondaryBtn"
                  class="sm:flex-1 px-6 py-3 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  :disabled="isCreating || bannerUploading"
                  :class="primaryBtn"
                  class="sm:flex-1 px-6 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  <span v-if="isCreating" class="flex items-center justify-center">
                    <span
                      class="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                      aria-hidden="true"
                    ></span>
                    Creating event…
                  </span>
                  <span v-else-if="bannerUploading">Uploading banner…</span>
                  <span v-else>Create Event</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div
      v-if="showSuccessModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @keydown="onDialogKeydown"
    >
      <div
        ref="successDialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-title"
        aria-describedby="success-desc"
        class="bg-white rounded-xl max-w-md w-full overflow-hidden"
      >
        <div class="bg-green-50 p-6 text-center">
          <div
            class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-8 h-8 text-green-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h2 id="success-title" class="text-xl font-semibold text-green-900 mb-2">
            Event created
          </h2>
          <p id="success-desc" class="text-green-800">
            Your new event has been added to the calendar.
          </p>
        </div>
        <div class="p-6 flex flex-col space-y-3">
          <button
            type="button"
            @click="goToEventsList"
            :class="primaryBtn"
            class="w-full font-medium py-3 px-4 rounded-lg"
          >
            View All Events
          </button>
          <button
            type="button"
            @click="createSimilar"
            class="w-full border border-[#5F7A55] text-[#4E6646] hover:bg-[#f4f5f3] font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Create Similar Event
          </button>
          <button
            type="button"
            @click="createAnother"
            class="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Start From Scratch
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  requiresAuth: true,
  title: "Create New Event - Admin Dashboard",
  layout: "admin",
  middleware: (to) => {
    const user = useSupabaseUser();
    const { isAdmin } = useAuth();
    if (!user.value && !isAdmin.value) {
      return navigateTo("/admin/login");
    }
  },
});

const supabase = useSupabaseClient();
const router = useRouter();
const toast = useToast();

// ──────────────────────────────────────────────
// STYLE TOKENS
// #5F7A55 / #4E6646 are darker shades of the original #ACBEA3 so white text
// and focus rings meet WCAG contrast (≥4.5:1 text, ≥3:1 UI components).
// ──────────────────────────────────────────────
const primaryBtn =
  "bg-[#5F7A55] text-white hover:bg-[#4E6646] transition-colors";
const secondaryBtn =
  "border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors";
const segActive = "bg-[#5F7A55] text-white";
const segIdle = "bg-white text-gray-700 hover:bg-gray-50";
const toolbarBtn =
  "px-2 py-1 rounded text-sm flex items-center justify-center min-w-[28px] h-7 transition-colors";
const tbActive = "bg-[#5F7A55] text-white";
const tbIdle = "text-gray-700 hover:bg-gray-200 hover:text-gray-900";
const labelCls = "block text-sm font-medium text-gray-700 mb-2";
const hintCls = "text-sm text-gray-500 mt-1";
const errorCls = "text-sm text-red-700 mt-1";
const inputClass = (err) => [
  "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#5F7A55] focus:border-transparent transition-colors",
  err ? "border-red-400 ring-1 ring-red-300" : "border-gray-300",
];

// ── refs ──
const descriptionEditor = ref(null);
const bannerInput = ref(null);
const linkInput = ref(null);
const successDialog = ref(null);

// ── state ──
const isCreating = ref(false);
const showSuccessModal = ref(false);
const attempted = ref(false);
const justSaved = ref(false);
const errors = ref({ tiers: [], fields: {} });

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// Banner
const bannerFile = ref(null);
const bannerPreview = ref(null);
const bannerUploading = ref(false);
const bannerUploadProgress = ref(0);
const bannerError = ref("");
const bannerFailed = ref(false);
const isDraggingBanner = ref(false);
let uploadToken = 0;
let currentXhr = null;

// Drag-and-drop for form fields
const draggingIndex = ref(null);
const dragOverIndex = ref(null);
const dragArmed = ref(null);

// Undo for removed fields
const lastRemoved = ref(null);
let undoTimer = null;

// New field type selector
const newFieldType = ref("text");

// Rich text toolbar state
const activeFormats = reactive({
  bold: false,
  italic: false,
  underline: false,
  ul: false,
  ol: false,
});
const currentBlock = ref("p");
const linkOpen = ref(false);
const linkUrl = ref("https://");
const linkError = ref("");
let savedRange = null;

// Unique id counter for drag-key stability
let _fieldIdCounter = 0;
const makeFieldId = () => `field_${++_fieldIdCounter}`;

// ── form data ──
const blankForm = () => ({
  title: "",
  event_type: "single", // 'single' | 'multi'
  event_date: "",
  event_start_time: "",
  event_end_time: "",
  event_end_date: "",
  venue: "",
  description: "",
  admission_fee: 0,
  currency: "₦",
  is_free: true,
  pricing_mode: "flat", // 'flat' | 'tiered'
  pricing_tiers: [],
  form_fields: [],
  banner_url: "",
});
const formData = ref(blankForm());

// ── unsaved-changes tracking ──
const snapshot = () =>
  JSON.stringify(formData.value, (k, v) => (k.startsWith("_") ? undefined : v));
const initialSnapshot = ref(snapshot());
const isDirty = computed(() => snapshot() !== initialSnapshot.value);

// ──────────────────────────────────────────────
// HELPERS
// ──────────────────────────────────────────────

const toISO = (dateStr, timeStr = "00:00") => {
  if (!dateStr) return null;
  const local = new Date(`${dateStr}T${timeStr || "00:00"}:00`);
  return isNaN(local.getTime()) ? null : local.toISOString();
};

const todayStr = () => {
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
};

const pastDateWarning = computed(
  () => !!formData.value.event_date && formData.value.event_date < todayStr()
);

/** Tiers cleaned for validation + saving: trimmed, empty perks stripped. */
const cleanTiers = (tiers) =>
  (tiers || []).map((t) => ({
    name: (t.name || "").trim(),
    price: Number(t.price) || 0,
    description: (t.description || "").trim(),
    perks: (t.perks || []).map((p) => (p || "").trim()).filter(Boolean),
  }));

const deriveAdmissionFee = (data) => {
  if (data.is_free) return 0;

  if (data.pricing_mode === "tiered") {
    const prices = cleanTiers(data.pricing_tiers)
      .map((t) => t.price)
      .filter((p) => p > 0);
    return prices.length ? Math.min(...prices) : 0;
  }

  return Number(data.admission_fee) || 0;
};

// ──────────────────────────────────────────────
// VALIDATION (inline errors)
// ──────────────────────────────────────────────

const hasAnyError = (e) =>
  !!(
    e.title ||
    e.event_date ||
    e.event_start_time ||
    e.event_end_time ||
    e.event_end_date ||
    e.fee ||
    e.banner ||
    e.tiers.some((t) => t && (t.name || t.price)) ||
    Object.keys(e.fields).length
  );

const hasErrors = computed(() => hasAnyError(errors.value));

const validate = (focusFirst = true) => {
  const d = formData.value;
  const e = { tiers: [], fields: {} };

  if (!d.title.trim()) e.title = "Enter an event title.";
  if (!d.event_date) e.event_date = "Choose a date.";

  if (d.event_type === "single") {
    if (!d.event_start_time) e.event_start_time = "Choose a start time.";
    if (!d.event_end_time) e.event_end_time = "Choose an end time.";
    if (
      d.event_start_time &&
      d.event_end_time &&
      d.event_end_time <= d.event_start_time
    ) {
      e.event_end_time = "End time must be after the start time.";
    }
  } else {
    if (!d.event_end_date) {
      e.event_end_date = "Choose an end date.";
    } else if (d.event_date && d.event_end_date < d.event_date) {
      e.event_end_date = "End date can't be before the start date.";
    } else if (
      d.event_date &&
      d.event_end_date === d.event_date &&
      d.event_start_time &&
      d.event_end_time &&
      d.event_end_time <= d.event_start_time
    ) {
      e.event_end_time = "End time must be after the start time.";
    }
  }

  if (!d.is_free) {
    if (d.pricing_mode === "flat") {
      if (!(Number(d.admission_fee) > 0))
        e.fee = "Enter an amount greater than 0.";
    } else {
      d.pricing_tiers.forEach((t, i) => {
        const te = {};
        if (!(t.name || "").trim()) te.name = "Name this tier.";
        if (!(Number(t.price) > 0)) te.price = "Price must be above 0.";
        e.tiers[i] = te;
      });
    }
  }

  d.form_fields.forEach((f) => {
    const fe = {};
    if (!f.label.trim()) fe.label = "Give this field a label.";
    if (f.type === "select" || f.type === "radio") {
      const opts = (f.optionsRaw || "")
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean);
      if (opts.length < 2) fe.options = "Add at least two options.";
    }
    if (Object.keys(fe).length) e.fields[f._id] = fe;
  });

  if (bannerFailed.value) {
    e.banner = "The banner failed to upload. Retry the upload or remove it.";
  }

  errors.value = e;
  const ok = !hasAnyError(e);

  if (!ok && focusFirst) {
    // Expand any collapsed field that has an option error
    d.form_fields.forEach((f) => {
      if (e.fields[f._id]?.options) f._expanded = true;
    });
    nextTick(() => {
      const el = document.querySelector('[aria-invalid="true"]');
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.focus?.({ preventScroll: true });
      }
    });
  }
  return ok;
};

watch(
  [formData, bannerFailed],
  () => {
    if (attempted.value) validate(false);
  },
  { deep: true }
);

// ──────────────────────────────────────────────
// BANNER UPLOAD (Cloudinary)
// ──────────────────────────────────────────────

// ⚠️  Replace these with your own Cloudinary credentials
const CLOUDINARY_CLOUD_NAME = "dkw2vy90z";
const CLOUDINARY_UPLOAD_PRESET = "bs_events"; // unsigned preset

const MAX_BANNER_SIZE = 5 * 1024 * 1024; // 5 MB

const triggerBannerPicker = () => {
  if (!bannerUploading.value) bannerInput.value?.click();
};

const handleBannerSelect = (e) => {
  const file = e.target.files?.[0];
  // Reset so picking the same file again still fires `change`
  e.target.value = "";
  if (file) validateAndSetBanner(file);
};

const handleBannerDrop = (e) => {
  isDraggingBanner.value = false;
  if (bannerUploading.value) return;
  const file = e.dataTransfer.files?.[0];
  if (file) validateAndSetBanner(file);
};

const validateAndSetBanner = (file) => {
  bannerError.value = "";
  const allowed = ["image/jpeg", "image/png", "image/webp"];
  if (!allowed.includes(file.type)) {
    bannerError.value = "Only JPG, PNG, or WEBP images are allowed.";
    return;
  }
  if (file.size > MAX_BANNER_SIZE) {
    bannerError.value = "File is too large. Maximum size is 5 MB.";
    return;
  }
  if (bannerPreview.value) URL.revokeObjectURL(bannerPreview.value);
  bannerFile.value = file;
  bannerPreview.value = URL.createObjectURL(file);
  uploadToCloudinary(file);
};

const uploadToCloudinary = (file) => {
  // Cancel any in-flight upload; stale responses are ignored via the token.
  if (currentXhr) currentXhr.abort();
  const token = ++uploadToken;

  bannerUploading.value = true;
  bannerFailed.value = false;
  bannerUploadProgress.value = 0;
  bannerError.value = "";
  formData.value.banner_url = "";

  const fd = new FormData();
  fd.append("file", file);
  fd.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  fd.append("folder", "event_banners");

  const xhr = new XMLHttpRequest();
  currentXhr = xhr;
  xhr.open(
    "POST",
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`
  );

  const finish = (url, message) => {
    if (token !== uploadToken) return;
    currentXhr = null;
    bannerUploading.value = false;
    if (url) {
      formData.value.banner_url = url;
    } else {
      bannerFailed.value = true;
      bannerError.value = message;
    }
  };

  xhr.upload.onprogress = (e) => {
    if (token === uploadToken && e.lengthComputable) {
      bannerUploadProgress.value = Math.round((e.loaded / e.total) * 100);
    }
  };
  xhr.onload = () => {
    if (xhr.status === 200) {
      try {
        finish(JSON.parse(xhr.responseText).secure_url);
      } catch {
        finish(null, "Banner upload failed. Retry or remove the banner.");
      }
    } else {
      finish(null, "Banner upload failed. Retry or remove the banner.");
    }
  };
  xhr.onerror = () =>
    finish(null, "Network error while uploading. Check your connection and retry.");

  xhr.send(fd);
};

const retryBannerUpload = () => {
  if (bannerFile.value) uploadToCloudinary(bannerFile.value);
};

const removeBanner = () => {
  uploadToken++; // invalidate any in-flight upload
  if (currentXhr) {
    currentXhr.abort();
    currentXhr = null;
  }
  if (bannerPreview.value) URL.revokeObjectURL(bannerPreview.value);
  bannerFile.value = null;
  bannerPreview.value = null;
  bannerUploading.value = false;
  bannerFailed.value = false;
  bannerError.value = "";
  formData.value.banner_url = "";
  if (bannerInput.value) bannerInput.value.value = "";
};

// ──────────────────────────────────────────────
// RICH TEXT DESCRIPTION
// ──────────────────────────────────────────────

const ALLOWED_TAGS = new Set([
  "P", "BR", "DIV", "STRONG", "B", "EM", "I", "U",
  "UL", "OL", "LI", "H2", "H3", "BLOCKQUOTE", "A",
]);
const DROP_TAGS = new Set([
  "SCRIPT", "STYLE", "IFRAME", "OBJECT", "EMBED", "NOSCRIPT", "TEMPLATE", "META", "LINK",
]);

const isSafeUrl = (url) => {
  try {
    const u = new URL(url, "https://placeholder.invalid");
    return ["http:", "https:", "mailto:"].includes(u.protocol);
  } catch {
    return false;
  }
};

/** Whitelist sanitizer: unwraps unknown tags, strips all attributes (except safe <a href>). */
const sanitizeHtml = (html) => {
  if (!html) return "";
  const doc = new DOMParser().parseFromString(html, "text/html");
  const clean = (node) => {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === 3) return; // text
      if (child.nodeType !== 1) {
        child.remove();
        return;
      }
      const tag = child.tagName;
      if (DROP_TAGS.has(tag)) {
        child.remove();
        return;
      }
      clean(child);
      if (!ALLOWED_TAGS.has(tag)) {
        child.replaceWith(...child.childNodes);
        return;
      }
      const href = tag === "A" ? child.getAttribute("href") : null;
      [...child.attributes].forEach((a) => child.removeAttribute(a.name));
      if (tag === "A") {
        if (href && isSafeUrl(href)) {
          child.setAttribute("href", href);
          child.setAttribute("rel", "noopener noreferrer");
          child.setAttribute("target", "_blank");
        } else {
          child.replaceWith(...child.childNodes);
        }
      }
    });
  };
  clean(doc.body);
  return doc.body.innerHTML;
};

const escapeHtml = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const saveSelection = () => {
  const sel = window.getSelection();
  const el = descriptionEditor.value;
  if (sel && sel.rangeCount && el && el.contains(sel.anchorNode)) {
    savedRange = sel.getRangeAt(0).cloneRange();
  }
};

const restoreSelection = () => {
  descriptionEditor.value?.focus();
  if (savedRange) {
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(savedRange);
  }
};

const updateToolbarState = () => {
  const el = descriptionEditor.value;
  const sel = window.getSelection();
  if (!el || !sel || !sel.anchorNode || !el.contains(sel.anchorNode)) return;
  activeFormats.bold = document.queryCommandState("bold");
  activeFormats.italic = document.queryCommandState("italic");
  activeFormats.underline = document.queryCommandState("underline");
  activeFormats.ul = document.queryCommandState("insertUnorderedList");
  activeFormats.ol = document.queryCommandState("insertOrderedList");
  const v = (document.queryCommandValue("formatBlock") || "")
    .toLowerCase()
    .replace(/[<>]/g, "");
  currentBlock.value = ["h2", "h3", "blockquote"].includes(v) ? v : "p";
};

const execCmd = (cmd, value = null) => {
  descriptionEditor.value?.focus();
  document.execCommand(cmd, false, value);
  syncDescription();
  updateToolbarState();
};

const execFormatBlock = (e) => {
  const val = e.target.value || "p";
  restoreSelection();
  execCmd("formatBlock", `<${val}>`);
};

const openLinkPopover = () => {
  saveSelection();
  linkUrl.value = "https://";
  linkError.value = "";
  linkOpen.value = true;
  nextTick(() => linkInput.value?.focus());
};

const closeLinkPopover = () => {
  linkOpen.value = false;
  linkError.value = "";
  restoreSelection();
};

const applyLink = () => {
  const url = linkUrl.value.trim();
  if (!savedRange || savedRange.collapsed) {
    linkError.value = "Select the text you want to turn into a link first.";
    return;
  }
  if (!url || !isSafeUrl(url) || !/^(https?:|mailto:)/i.test(url)) {
    linkError.value = "Enter a valid web address starting with https://";
    return;
  }
  restoreSelection();
  execCmd("createLink", url);
  linkOpen.value = false;
  linkError.value = "";
};

const handlePaste = (e) => {
  e.preventDefault();
  const html = e.clipboardData.getData("text/html");
  const text = e.clipboardData.getData("text/plain");
  const safe = html
    ? sanitizeHtml(html)
    : escapeHtml(text).replace(/\r?\n/g, "<br>");
  document.execCommand("insertHTML", false, safe);
  syncDescription();
};

const syncDescription = () => {
  formData.value.description = descriptionEditor.value?.innerHTML || "";
};

// ──────────────────────────────────────────────
// PRICING
// ──────────────────────────────────────────────

const setFree = (free) => {
  formData.value.is_free = free;
  if (free) {
    formData.value.admission_fee = 0;
    formData.value.pricing_mode = "flat";
  } else if (!formData.value.admission_fee) {
    formData.value.admission_fee = null; // shows the 0.00 placeholder instead of "0"
  }
};

const initTieredPricing = () => {
  formData.value.pricing_mode = "tiered";
  if (formData.value.pricing_tiers.length === 0) addTier();
};

const addTier = () => {
  formData.value.pricing_tiers.push({
    name: "",
    price: null,
    description: "",
    perks: [""],
  });
};

const removeTier = (i) => {
  if (formData.value.pricing_tiers.length > 1) {
    formData.value.pricing_tiers.splice(i, 1);
  }
};

const addPerk = (ti) => {
  formData.value.pricing_tiers[ti].perks.push("");
};

const removePerk = (ti, pi) => {
  formData.value.pricing_tiers[ti].perks.splice(pi, 1);
};

// ──────────────────────────────────────────────
// FORM FIELDS
// ──────────────────────────────────────────────

const FIELD_LABELS = {
  text: "Short Text",
  textarea: "Long Text",
  email: "Email",
  tel: "Phone",
  number: "Number",
  select: "Dropdown",
  radio: "Multiple Choice",
  checkbox: "Checkbox",
  date: "Date",
  file: "File Upload",
};

const supportsPlaceholder = (type) =>
  ["text", "textarea", "email", "tel", "number"].includes(type);

const addFormField = () => {
  const id = makeFieldId();
  formData.value.form_fields.push({
    _id: id,
    label: "",
    type: newFieldType.value,
    required: false,
    placeholder: "",
    optionsRaw: "",
    accept: "",
    _expanded: ["select", "radio", "file"].includes(newFieldType.value),
  });
  nextTick(() => document.getElementById(`${id}-label`)?.focus());
};

const onFieldTypeChange = (field) => {
  if (["select", "radio", "file"].includes(field.type)) field._expanded = true;
};

const removeFormField = (index) => {
  const [field] = formData.value.form_fields.splice(index, 1);
  lastRemoved.value = { field, index };
  clearTimeout(undoTimer);
  undoTimer = setTimeout(() => (lastRemoved.value = null), 8000);
};

const undoRemove = () => {
  if (!lastRemoved.value) return;
  const { field, index } = lastRemoved.value;
  const fields = formData.value.form_fields;
  fields.splice(Math.min(index, fields.length), 0, field);
  lastRemoved.value = null;
  clearTimeout(undoTimer);
};

const moveField = (index, dir) => {
  const fields = formData.value.form_fields;
  const target = index + dir;
  if (target < 0 || target >= fields.length) return;
  const [moved] = fields.splice(index, 1);
  fields.splice(target, 0, moved);
};

// Drag-and-drop reorder (only armed from the grip handle)
const onDragStart = (e, index) => {
  draggingIndex.value = index;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", String(index));
};

const onDragEnd = () => {
  draggingIndex.value = null;
  dragOverIndex.value = null;
  dragArmed.value = null;
};

const onDropOnField = (e, targetIndex) => {
  if (draggingIndex.value === null || draggingIndex.value === targetIndex) {
    onDragEnd();
    return;
  }
  const fields = formData.value.form_fields;
  const moved = fields.splice(draggingIndex.value, 1)[0];
  fields.splice(targetIndex, 0, moved);
  onDragEnd();
};

const onDropField = () => onDragEnd();

// ──────────────────────────────────────────────
// SERIALIZATION
// ──────────────────────────────────────────────

const serializeFields = () =>
  formData.value.form_fields.map(({ _id, _expanded, optionsRaw, ...rest }) => ({
    ...rest,
    label: rest.label.trim(),
    options:
      rest.type === "select" || rest.type === "radio"
        ? optionsRaw
            .split("\n")
            .map((s) => s.trim())
            .filter(Boolean)
        : undefined,
  }));

const buildDatePayload = () => {
  const d = formData.value;
  if (d.event_type === "single") {
    return {
      event_date: toISO(d.event_date, d.event_start_time),
      event_end_date: d.event_end_time
        ? toISO(d.event_date, d.event_end_time)
        : null,
    };
  }
  return {
    event_date: toISO(d.event_date, d.event_start_time || "00:00"),
    event_end_date: d.event_end_date
      ? toISO(d.event_end_date, d.event_end_time || "23:59")
      : null,
  };
};

const cleanDescription = () => {
  const el = descriptionEditor.value;
  if (!el || !el.textContent.trim()) return "";
  return sanitizeHtml(el.innerHTML);
};

// ──────────────────────────────────────────────
// SUBMIT
// ──────────────────────────────────────────────

const handleCreateEvent = async () => {
  attempted.value = true;

  if (bannerUploading.value) {
    toast.add({
      title: "Please wait",
      description: "Banner is still uploading.",
      color: "yellow",
    });
    return;
  }

  if (!validate()) return;

  const tiers = cleanTiers(formData.value.pricing_tiers);
  const admissionFee = deriveAdmissionFee(formData.value);

  isCreating.value = true;
  try {
    const payload = {
      title: formData.value.title.trim(),
      ...buildDatePayload(),
      venue: formData.value.venue.trim(),
      description: cleanDescription(),
      is_free: formData.value.is_free,
      currency: formData.value.is_free ? "₦" : formData.value.currency,
      admission_fee: admissionFee,
      pricing_mode: formData.value.is_free ? null : formData.value.pricing_mode,
      pricing_tiers:
        formData.value.pricing_mode === "tiered" && !formData.value.is_free
          ? tiers
          : null,
      form_fields: serializeFields(),
      banner_url: formData.value.banner_url || null,
    };

    const { error } = await supabase
      .from("events")
      .insert([payload])
      .select()
      .single();
    if (error) throw error;

    justSaved.value = true;
    showSuccessModal.value = true; // the modal is the single success signal
  } catch (error) {
    toast.add({
      title: "Creation failed",
      description: error.message || "An error occurred. Please try again.",
      color: "red",
      timeout: 7000,
    });
  } finally {
    isCreating.value = false;
  }
};

// ──────────────────────────────────────────────
// NAVIGATION + SUCCESS MODAL
// ──────────────────────────────────────────────

const goBack = () => router.push("/admin/events");

const goToEventsList = () => {
  showSuccessModal.value = false;
  router.push("/admin/events");
};

const resetTracking = () => {
  attempted.value = false;
  justSaved.value = false;
  errors.value = { tiers: [], fields: {} };
  initialSnapshot.value = snapshot();
};

const createAnother = () => {
  showSuccessModal.value = false;
  formData.value = blankForm();
  if (descriptionEditor.value) descriptionEditor.value.innerHTML = "";
  removeBanner();
  lastRemoved.value = null;
  resetTracking();
};

// Keeps everything (description, pricing, banner, registration fields) except the dates.
const createSimilar = () => {
  showSuccessModal.value = false;
  Object.assign(formData.value, {
    event_date: "",
    event_start_time: "",
    event_end_time: "",
    event_end_date: "",
  });
  resetTracking();
  nextTick(() => document.getElementById("event-title")?.focus());
};

watch(showSuccessModal, (open) => {
  if (open) nextTick(() => successDialog.value?.querySelector("button")?.focus());
});

const onDialogKeydown = (e) => {
  if (e.key === "Escape") {
    e.preventDefault();
    goToEventsList();
    return;
  }
  if (e.key !== "Tab" || !successDialog.value) return;
  const focusable = [...successDialog.value.querySelectorAll("button")];
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
};

// ── Leave protection ──
onBeforeRouteLeave(() => {
  if (!isDirty.value || justSaved.value) return true;
  return window.confirm("You have unsaved changes. Leave this page?");
});

const onBeforeUnload = (e) => {
  if (isDirty.value && !justSaved.value) {
    e.preventDefault();
    e.returnValue = "";
  }
};

onMounted(() => {
  document.execCommand("defaultParagraphSeparator", false, "p");
  document.addEventListener("selectionchange", updateToolbarState);
  window.addEventListener("beforeunload", onBeforeUnload);
});

onBeforeUnmount(() => {
  document.removeEventListener("selectionchange", updateToolbarState);
  window.removeEventListener("beforeunload", onBeforeUnload);
  clearTimeout(undoTimer);
  if (currentXhr) currentXhr.abort();
  if (bannerPreview.value) URL.revokeObjectURL(bannerPreview.value);
});

// ──────────────────────────────────────────────
// PAGE META
// ──────────────────────────────────────────────

useHead({
  title: "Create New Event - Admin Dashboard",
  meta: [{ name: "description", content: "Create a new educational event" }],
});
</script>

<style scoped>
/* Rich text editor content styles */
.rich-editor:empty::before {
  content: attr(data-placeholder);
  color: #6b7280;
  pointer-events: none;
}

.rich-editor :deep(h2) {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0.5rem 0;
}
.rich-editor :deep(h3) {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0.4rem 0;
}
.rich-editor :deep(blockquote) {
  border-left: 3px solid #acbea3;
  padding-left: 1rem;
  color: #6b7280;
  font-style: italic;
  margin: 0.5rem 0;
}
.rich-editor :deep(ul) {
  list-style: disc;
  padding-left: 1.5rem;
  margin: 0.4rem 0;
}
.rich-editor :deep(ol) {
  list-style: decimal;
  padding-left: 1.5rem;
  margin: 0.4rem 0;
}
.rich-editor :deep(a) {
  color: #4e6646;
  text-decoration: underline;
}
.rich-editor :deep(strong) {
  font-weight: 700;
}
.rich-editor :deep(em) {
  font-style: italic;
}
</style>