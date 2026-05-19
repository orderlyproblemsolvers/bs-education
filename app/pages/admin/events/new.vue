<template>
  <div class="min-h-screen bg-[#f4f5f3] p-6">
    <div class="max-w-4xl mx-auto">
      <!-- Header Section -->
      <div
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div class="bg-[#ACBEA3] p-3 rounded-xl mr-4">
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
            @click="router.push('/admin/events')"
            class="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
      <div
        class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
      >
        <!-- Form Header -->
        <div class="bg-[#f4f5f3] p-6 border-b border-gray-200">
          <div class="flex items-center">
            <svg
              class="w-6 h-6 text-[#ACBEA3] mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            <h2 class="text-xl font-semibold text-gray-900">Event Details</h2>
          </div>
          <p class="text-gray-600 mt-1 text-sm">
            Fill in the information below to create your event
          </p>
        </div>

        <!-- Form Content -->
        <div class="p-8">
          <form @submit.prevent="handleCreateEvent" class="space-y-10">
            <!-- ── BASIC INFORMATION ── -->
            <section class="space-y-6">
              <h3
                class="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2"
              >
                Basic Information
              </h3>

              <!-- Event Title -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Event Title <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.title"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors"
                  placeholder="e.g., Introduction to Digital Marketing"
                />
              </div>

              <!-- Date / Venue -->
              <!-- Event Type Toggle -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Event Duration</label
                >
                <div
                  class="flex rounded-lg border border-gray-200 overflow-hidden w-fit"
                >
                  <button
                    type="button"
                    @click="formData.event_type = 'single'"
                    :class="
                      formData.event_type === 'single'
                        ? 'bg-[#ACBEA3] text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    "
                    class="px-5 py-2 text-sm font-medium transition-colors"
                  >
                    Single Day
                  </button>
                  <button
                    type="button"
                    @click="formData.event_type = 'multi'"
                    :class="
                      formData.event_type === 'multi'
                        ? 'bg-[#ACBEA3] text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    "
                    class="px-5 py-2 text-sm font-medium transition-colors border-l border-gray-200"
                  >
                    Multi Day
                  </button>
                </div>
              </div>

              <!-- Single Day inputs -->
              <div
                v-if="formData.event_type === 'single'"
                class="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Date <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="formData.event_date"
                    type="date"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Start Time <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="formData.event_start_time"
                    type="time"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    End Time <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="formData.event_end_time"
                    type="time"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <!-- Multi Day inputs -->
              <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Start Date <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="formData.event_date"
                    type="date"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    End Date <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="formData.event_end_date"
                    type="date"
                    :min="formData.event_date"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <!-- Venue (unchanged, now its own row) -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Venue</label
                >
                <input
                  v-model="formData.venue"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors"
                  placeholder="e.g., Main Conference Hall"
                />
              </div>

              <!-- ── EVENT BANNER ── -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Event Banner
                  <span class="ml-2 text-xs font-normal text-gray-400"
                    >(Optional · max 5 MB · JPG, PNG, WEBP)</span
                  >
                </label>

                <!-- Drop Zone -->
                <div
                  v-if="!bannerPreview"
                  class="relative border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#ACBEA3] transition-colors cursor-pointer"
                  :class="{ 'border-[#ACBEA3] bg-[#f4f5f3]': isDraggingBanner }"
                  @dragover.prevent="isDraggingBanner = true"
                  @dragleave="isDraggingBanner = false"
                  @drop.prevent="handleBannerDrop"
                  @click="$refs.bannerInput.click()"
                >
                  <svg
                    class="w-10 h-10 text-gray-400 mx-auto mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <p class="text-sm text-gray-600 font-medium">
                    Drop your banner here or
                    <span class="text-[#ACBEA3]">browse</span>
                  </p>
                  <p class="text-xs text-gray-400 mt-1">
                    Recommended: 1200 × 630 px
                  </p>
                  <input
                    ref="bannerInput"
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    class="hidden"
                    @change="handleBannerSelect"
                  />
                </div>

                <!-- Preview -->
                <div
                  v-else
                  class="relative rounded-xl overflow-hidden border border-gray-200"
                >
                  <img :src="bannerPreview" class="w-full h-48 object-cover" />
                  <div
                    class="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-3"
                  >
                    <button
                      type="button"
                      @click="$refs.bannerInput.click()"
                      class="bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Replace
                    </button>
                    <button
                      type="button"
                      @click="removeBanner"
                      class="bg-red-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                  <input
                    ref="bannerInput"
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    class="hidden"
                    @change="handleBannerSelect"
                  />
                  <!-- Upload progress -->
                  <div
                    v-if="bannerUploading"
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
                <p v-if="bannerError" class="text-red-500 text-xs mt-1">
                  {{ bannerError }}
                </p>
              </div>
            </section>

            <!-- ── DESCRIPTION (Rich Text) ── -->
            <section class="space-y-4">
              <h3
                class="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2"
              >
                Event Description
              </h3>

              <!-- Mini toolbar -->
              <div
                class="flex flex-wrap items-center gap-1 p-2 border border-gray-200 rounded-t-lg bg-gray-50"
              >
                <button
                  type="button"
                  @click="execCmd('bold')"
                  title="Bold"
                  class="px-2 py-1 rounded text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors flex items-center justify-center min-w-[28px] h-7 font-bold"
                >
                  B
                </button>
                <button
                  type="button"
                  @click="execCmd('italic')"
                  title="Italic"
                  class="px-2 py-1 rounded text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors flex items-center justify-center min-w-[28px] h-7 italic"
                >
                  I
                </button>
                <button
                  type="button"
                  @click="execCmd('underline')"
                  title="Underline"
                  class="px-2 py-1 rounded text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors flex items-center justify-center min-w-[28px] h-7 underline"
                >
                  U
                </button>
                <div class="w-px h-5 bg-gray-300 mx-1"></div>
                <button
                  type="button"
                  @click="execCmd('insertUnorderedList')"
                  title="Bullet list"
                  class="px-2 py-1 rounded text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors flex items-center justify-center min-w-[28px] h-7"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
                  @click="execCmd('insertOrderedList')"
                  title="Numbered list"
                  class="px-2 py-1 rounded text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors flex items-center justify-center min-w-[28px] h-7"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </button>
                <div class="w-px h-5 bg-gray-300 mx-1"></div>
                <select
                  @change="execFormatBlock($event)"
                  class="text-xs border border-gray-300 rounded px-2 py-1 bg-white focus:ring-1 focus:ring-[#ACBEA3]"
                >
                  <option value="">Paragraph</option>
                  <option value="h2">Heading 2</option>
                  <option value="h3">Heading 3</option>
                  <option value="blockquote">Quote</option>
                </select>
                <div class="w-px h-5 bg-gray-300 mx-1"></div>
                <button
                  type="button"
                  @click="insertLink"
                  title="Insert link"
                  class="px-2 py-1 rounded text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors flex items-center justify-center min-w-[28px] h-7"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
                  @click="execCmd('removeFormat')"
                  title="Clear formatting"
                  class="px-2 py-1 rounded text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors flex items-center justify-center min-w-[28px] h-7 text-red-400"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
              <div
                ref="descriptionEditor"
                contenteditable="true"
                @input="syncDescription"
                class="rich-editor w-full min-h-[140px] px-4 py-3 border border-gray-300 border-t-0 rounded-b-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors outline-none text-sm text-gray-800"
                data-placeholder="Describe what participants will learn and what to expect…"
              ></div>
            </section>

            <!-- ── PRICING ── -->
            <section class="space-y-6">
              <div
                class="flex items-center justify-between border-b border-gray-200 pb-2"
              >
                <h3 class="text-lg font-semibold text-gray-900">Pricing</h3>
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="formData.is_free"
                    @change="handleFreeEventToggle"
                    type="checkbox"
                    class="mr-2 text-[#ACBEA3] focus:ring-[#ACBEA3] rounded"
                  />
                  <span class="text-sm text-gray-700"
                    >This is a free event</span
                  >
                </label>
              </div>

              <!-- Free banner -->
              <div
                v-if="formData.is_free"
                class="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center"
              >
                <svg
                  class="w-5 h-5 text-green-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
                <!-- Pricing mode tabs -->
                <div
                  class="flex rounded-lg border border-gray-200 overflow-hidden w-fit"
                >
                  <button
                    type="button"
                    @click="formData.pricing_mode = 'flat'"
                    :class="
                      formData.pricing_mode === 'flat'
                        ? 'bg-[#ACBEA3] text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    "
                    class="px-5 py-2 text-sm font-medium transition-colors"
                  >
                    Flat Price
                  </button>
                  <button
                    type="button"
                    @click="initTieredPricing"
                    :class="
                      formData.pricing_mode === 'tiered'
                        ? 'bg-[#ACBEA3] text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    "
                    class="px-5 py-2 text-sm font-medium transition-colors border-l border-gray-200"
                  >
                    Tiered Pricing
                  </button>
                </div>

                <!-- Currency (shared) -->
                <div class="w-48">
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Currency <span class="text-red-500">*</span></label
                  >
                  <select
                    v-model="formData.currency"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors"
                  >
                    <option value="₦">NGN (₦)</option>
                    <option value="$">USD ($)</option>
                    <option value="£">GBP (£)</option>
                    <option value="€">EUR (€)</option>
                  </select>
                </div>

                <!-- FLAT -->
                <div v-if="formData.pricing_mode === 'flat'">
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Admission Fee <span class="text-red-500">*</span></label
                  >
                  <div class="relative w-56">
                    <div
                      class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"
                    >
                      <span class="text-gray-500 text-sm">{{
                        formData.currency
                      }}</span>
                    </div>
                    <input
                      v-model.number="formData.admission_fee"
                      type="number"
                      step="0.01"
                      min="0"
                      :required="!formData.is_free"
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ACBEA3] focus:border-transparent transition-colors"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <!-- TIERED -->
                <div v-else class="space-y-4">
                  <div
                    v-for="(tier, ti) in formData.pricing_tiers"
                    :key="ti"
                    class="border border-gray-200 rounded-xl p-5 bg-gray-50 space-y-4"
                  >
                    <div class="flex items-center justify-between">
                      <input
                        v-model="tier.name"
                        type="text"
                        placeholder="Tier name (e.g. Early Bird, VIP)"
                        class="flex-1 mr-4 px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:ring-1 focus:ring-[#ACBEA3] focus:border-transparent"
                      />
                      <div class="relative w-36">
                        <span
                          class="absolute inset-y-0 left-3 flex items-center text-gray-500 text-sm pointer-events-none"
                          >{{ formData.currency }}</span
                        >
                        <input
                          v-model.number="tier.price"
                          type="number"
                          step="0.01"
                          min="0"
                          placeholder="0.00"
                          class="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-[#ACBEA3] focus:border-transparent"
                        />
                      </div>
                      <button
                        type="button"
                        @click="removeTier(ti)"
                        class="ml-3 text-red-400 hover:text-red-600 p-1"
                      >
                        <svg
                          class="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
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
                      <label
                        class="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 block"
                        >What's included</label
                      >
                      <div class="space-y-2">
                        <div
                          v-for="(perk, pi) in tier.perks"
                          :key="pi"
                          class="flex items-center gap-2"
                        >
                          <svg
                            class="w-4 h-4 text-[#ACBEA3] shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
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
                            placeholder="e.g., Access to all sessions"
                            class="flex-1 px-3 py-1.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-[#ACBEA3] focus:border-transparent bg-white"
                          />
                          <button
                            type="button"
                            @click="removePerk(ti, pi)"
                            class="text-gray-400 hover:text-red-400 shrink-0"
                          >
                            <svg
                              class="w-3.5 h-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
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
                          class="text-xs text-[#ACBEA3] hover:text-[#9BAD94] font-medium mt-1 flex items-center gap-1"
                        >
                          <svg
                            class="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
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
                        class="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1 block"
                        >Description (optional)</label
                      >
                      <input
                        v-model="tier.description"
                        type="text"
                        placeholder="Short tagline for this tier"
                        class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:ring-1 focus:ring-[#ACBEA3] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    @click="addTier"
                    class="flex items-center gap-2 text-sm text-[#ACBEA3] hover:text-[#9BAD94] font-medium"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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
            <section class="space-y-6">
              <div
                class="flex items-center justify-between border-b border-gray-200 pb-2"
              >
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">
                    Registration Form
                  </h3>
                  <p class="text-xs text-gray-500 mt-0.5">
                    Drag rows to reorder · Full Name and Email are always
                    collected
                  </p>
                </div>
                <div class="flex items-center gap-2">
                  <select
                    v-model="newFieldType"
                    class="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:ring-1 focus:ring-[#ACBEA3] bg-white"
                  >
                    <option value="text">Short Text</option>
                    <option value="textarea">Long Text</option>
                    <option value="email">Email</option>
                    <option value="tel">Phone</option>
                    <option value="number">Number</option>
                    <option value="select">Dropdown</option>
                    <option value="radio">Multiple Choice</option>
                    <option value="checkbox">Checkbox</option>
                    <option value="date">Date</option>
                    <option value="file">File Upload</option>
                  </select>
                  <button
                    type="button"
                    @click="addFormField"
                    class="flex items-center space-x-2 bg-[#ACBEA3] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#9BAD94] transition-colors"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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

              <!-- Drag List -->
              <div
                class="space-y-3"
                @dragover.prevent
                @drop.prevent="onDropField($event)"
              >
                <!-- Custom fields -->
                <div
                  v-for="(field, index) in formData.form_fields"
                  :key="field._id"
                  draggable="true"
                  @dragstart="onDragStart($event, index)"
                  @dragover.prevent="dragOverIndex = index"
                  @dragleave="dragOverIndex = null"
                  @drop.prevent="onDropOnField($event, index)"
                  :class="[
                    'border rounded-xl bg-white transition-all',
                    dragOverIndex === index
                      ? 'border-[#ACBEA3] ring-2 ring-[#ACBEA3]/30'
                      : 'border-gray-200',
                    draggingIndex === index ? 'opacity-40' : '',
                  ]"
                >
                  <!-- Field header row -->
                  <div class="flex items-center gap-3 px-4 py-3">
                    <svg
                      class="w-4 h-4 text-gray-400 cursor-grab shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="9" cy="6" r="1.5" />
                      <circle cx="15" cy="6" r="1.5" />
                      <circle cx="9" cy="12" r="1.5" />
                      <circle cx="15" cy="12" r="1.5" />
                      <circle cx="9" cy="18" r="1.5" />
                      <circle cx="15" cy="18" r="1.5" />
                    </svg>

                    <input
                      v-model="field.label"
                      type="text"
                      placeholder="Field Label"
                      class="flex-1 px-3 py-1.5 border border-gray-200 rounded-md text-sm focus:ring-1 focus:ring-[#ACBEA3] focus:border-transparent"
                    />

                    <span
                      class="text-xs px-2 py-1 rounded bg-gray-100 text-gray-500 whitespace-nowrap"
                      >{{ fieldTypeLabel(field.type) }}</span
                    >

                    <label
                      class="flex items-center text-xs text-gray-600 whitespace-nowrap cursor-pointer"
                    >
                      <input
                        v-model="field.required"
                        type="checkbox"
                        class="mr-1.5 text-[#ACBEA3] focus:ring-[#ACBEA3] rounded"
                      />
                      Required
                    </label>

                    <button
                      type="button"
                      @click="field._expanded = !field._expanded"
                      class="text-gray-400 hover:text-gray-600 p-1 transition-colors"
                      :title="field._expanded ? 'Collapse' : 'Options'"
                    >
                      <svg
                        class="w-4 h-4 transition-transform"
                        :class="{ 'rotate-180': field._expanded }"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      @click="removeFormField(index)"
                      class="text-red-400 hover:text-red-600 p-1 transition-colors"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <!-- Expandable options -->
                  <div
                    v-if="field._expanded"
                    class="px-4 pb-4 border-t border-gray-100 pt-3 space-y-3"
                  >
                    <div>
                      <label
                        class="text-xs text-gray-500 font-medium mb-1 block"
                        >Placeholder / Helper text</label
                      >
                      <input
                        v-model="field.placeholder"
                        type="text"
                        placeholder="Hint shown inside the field"
                        class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#ACBEA3] focus:border-transparent"
                      />
                    </div>

                    <!-- Choices for select / radio -->
                    <div
                      v-if="field.type === 'select' || field.type === 'radio'"
                    >
                      <label
                        class="text-xs text-gray-500 font-medium mb-2 block"
                        >Options (one per line)</label
                      >
                      <textarea
                        v-model="field.optionsRaw"
                        rows="3"
                        placeholder="Option 1&#10;Option 2&#10;Option 3"
                        class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#ACBEA3] focus:border-transparent"
                      ></textarea>
                    </div>

                    <!-- Accepted file types -->
                    <div v-if="field.type === 'file'">
                      <label
                        class="text-xs text-gray-500 font-medium mb-1 block"
                        >Accepted file types</label
                      >
                      <input
                        v-model="field.accept"
                        type="text"
                        placeholder=".pdf,.docx,.jpg"
                        class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#ACBEA3] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <!-- Empty state -->
                <div
                  v-if="formData.form_fields.length === 0"
                  class="text-center py-8 border-2 border-dashed border-gray-200 rounded-xl"
                >
                  <svg
                    class="w-10 h-10 text-gray-300 mx-auto mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  <p class="text-sm text-gray-500 mb-1">
                    No extra fields added yet
                  </p>
                  <p class="text-xs text-gray-400">
                    Choose a type above and click "Add Field"
                  </p>
                </div>
              </div>
            </section>

            <!-- ── ACTIONS ── -->
            <div class="flex space-x-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                @click="router.push('/admin/events')"
                class="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                :disabled="isCreating || bannerUploading"
                class="flex-1 bg-[#ACBEA3] text-white px-6 py-3 rounded-lg hover:bg-[#9BAD94] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
              >
                <span
                  v-if="isCreating"
                  class="flex items-center justify-center"
                >
                  <div
                    class="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                  ></div>
                  Creating Event…
                </span>
                <span v-else>Create Event</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Help Section -->
      <div
        class="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <div class="flex items-start">
          <div class="bg-[#EB6534]/10 p-2 rounded-lg mr-4 mt-1">
            <svg
              class="w-5 h-5 text-[#EB6534]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              ></path>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">
              Tips for Creating Great Events
            </h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>
                • Use clear, descriptive titles that highlight the main benefit
              </li>
              <li>
                • Upload a 1200×630 px banner for best display across devices
              </li>
              <li>
                • Use the description editor's formatting to make content
                scannable
              </li>
              <li>
                • Consider tiered pricing for early birds or VIP attendees
              </li>
              <li>
                • Only add registration fields you truly need — shorter forms
                convert better
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div
      v-if="showSuccessModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <div class="bg-white rounded-xl max-w-md w-full overflow-hidden">
        <div class="bg-green-50 p-6 text-center">
          <div
            class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-green-900 mb-2">
            Event Created Successfully!
          </h3>
          <p class="text-green-700">
            Your new event has been added to the calendar.
          </p>
        </div>
        <div class="p-6 flex flex-col space-y-3">
          <button
            @click="goToEventsList"
            class="w-full bg-[#ACBEA3] hover:bg-[#9BAD94] text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            View All Events
          </button>
          <button
            @click="createAnother"
            class="w-full border border-[#ACBEA3] text-[#ACBEA3] hover:bg-[#ACBEA3] hover:text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Create Another Event
          </button>
        </div>
      </div>
    </div>

    <!-- Loading Overlay -->
    <div
      v-if="isCreating"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-40"
    >
      <div class="bg-white rounded-xl p-8 max-w-sm mx-4 text-center">
        <div
          class="animate-spin w-12 h-12 border-4 border-[#ACBEA3] border-t-transparent rounded-full mx-auto mb-4"
        ></div>
        <h3 class="font-semibold text-gray-900 mb-2">Creating Event…</h3>
        <p class="text-gray-600 text-sm">
          Please wait while we set up your new event.
        </p>
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

// ── refs ──
const descriptionEditor = ref(null);
const bannerInput = ref(null);

// ── state ──
const isCreating = ref(false);
const showSuccessModal = ref(false);

// Banner
const bannerFile = ref(null);
const bannerPreview = ref(null);
const bannerUploading = ref(false);
const bannerUploadProgress = ref(0);
const bannerError = ref("");
const isDraggingBanner = ref(false);

// Drag-and-drop for form fields
const draggingIndex = ref(null);
const dragOverIndex = ref(null);

// New field type selector
const newFieldType = ref("text");

// Unique id counter for drag-key stability
let _fieldIdCounter = 0;
const makeFieldId = () => `field_${++_fieldIdCounter}`;

// ── form data ──
const formData = ref({
  title: "",
  event_type: "single", // 'single' | 'multi'
  event_date: "", // date string YYYY-MM-DD (both modes)
  event_start_time: "", // HH:MM  (single only)
  event_end_time: "", // HH:MM  (single only)
  event_end_date: "", // YYYY-MM-DD (multi only)
  venue: "",
  description: "", // HTML string from rich editor
  admission_fee: 0,
  currency: "₦",
  is_free: true,
  pricing_mode: "flat", // 'flat' | 'tiered'
  pricing_tiers: [],
  form_fields: [],
  banner_url: "",
});

// ──────────────────────────────────────────────
// BANNER UPLOAD (Cloudinary)
// ──────────────────────────────────────────────

// ⚠️  Replace these with your own Cloudinary credentials
const CLOUDINARY_CLOUD_NAME = "dkw2vy90z";
const CLOUDINARY_UPLOAD_PRESET = "bs_events"; // unsigned preset

const MAX_BANNER_SIZE = 5 * 1024 * 1024; // 5 MB

const handleBannerSelect = (e) => {
  const file = e.target.files?.[0];
  if (file) validateAndSetBanner(file);
};

const handleBannerDrop = (e) => {
  isDraggingBanner.value = false;
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
  bannerFile.value = file;
  bannerPreview.value = URL.createObjectURL(file);
  uploadToCloudinary(file);
};

const uploadToCloudinary = async (file) => {
  bannerUploading.value = true;
  bannerUploadProgress.value = 0;
  formData.value.banner_url = "";

  try {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    fd.append("folder", "event_banners");

    const xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`
    );

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        bannerUploadProgress.value = Math.round((e.loaded / e.total) * 100);
      }
    };

    await new Promise((resolve, reject) => {
      xhr.onload = () => {
        if (xhr.status === 200) {
          const res = JSON.parse(xhr.responseText);
          formData.value.banner_url = res.secure_url;
          resolve();
        } else {
          reject(new Error("Upload failed"));
        }
      };
      xhr.onerror = () => reject(new Error("Network error"));
      xhr.send(fd);
    });
  } catch (err) {
    bannerError.value =
      "Banner upload failed. You can still create the event without a banner.";
    formData.value.banner_url = "";
  } finally {
    bannerUploading.value = false;
  }
};

const removeBanner = () => {
  bannerFile.value = null;
  bannerPreview.value = null;
  bannerError.value = "";
  formData.value.banner_url = "";
  if (bannerInput.value) bannerInput.value.value = "";
};

// ──────────────────────────────────────────────
// RICH TEXT DESCRIPTION
// ──────────────────────────────────────────────

const execCmd = (cmd, value = null) => {
  descriptionEditor.value?.focus();
  document.execCommand(cmd, false, value);
  syncDescription();
};

const execFormatBlock = (e) => {
  const val = e.target.value;
  execCmd("formatBlock", val || "p");
  e.target.value = ""; // reset select
};

const insertLink = () => {
  const url = window.prompt("Enter URL:", "https://");
  if (url) execCmd("createLink", url);
};

const syncDescription = () => {
  formData.value.description = descriptionEditor.value?.innerHTML || "";
};

// ──────────────────────────────────────────────
// PRICING
// ──────────────────────────────────────────────

const handleFreeEventToggle = () => {
  if (formData.value.is_free) {
    formData.value.admission_fee = 0;
    formData.value.pricing_mode = "flat";
  }
};

const initTieredPricing = () => {
  formData.value.pricing_mode = "tiered";
  if (formData.value.pricing_tiers.length === 0) addTier();
};

const addTier = () => {
  formData.value.pricing_tiers.push({
    name: "",
    price: 0,
    description: "",
    perks: [""],
  });
};

const removeTier = (i) => {
  formData.value.pricing_tiers.splice(i, 1);
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

const fieldTypeLabel = (type) => FIELD_LABELS[type] || type;

const addFormField = () => {
  formData.value.form_fields.push({
    _id: makeFieldId(),
    label: "",
    type: newFieldType.value,
    required: false,
    placeholder: "",
    optionsRaw: "", // for select / radio
    accept: "", // for file
    _expanded: false,
  });
};

const removeFormField = (index) => {
  formData.value.form_fields.splice(index, 1);
};

// Drag-and-drop reorder
const onDragStart = (e, index) => {
  draggingIndex.value = index;
  e.dataTransfer.effectAllowed = "move";
};

const onDropOnField = (e, targetIndex) => {
  if (draggingIndex.value === null || draggingIndex.value === targetIndex)
    return;
  const fields = formData.value.form_fields;
  const moved = fields.splice(draggingIndex.value, 1)[0];
  fields.splice(targetIndex, 0, moved);
  draggingIndex.value = null;
  dragOverIndex.value = null;
};

const onDropField = () => {
  draggingIndex.value = null;
  dragOverIndex.value = null;
};

// ──────────────────────────────────────────────
// SUBMIT
// ──────────────────────────────────────────────

const serializeFields = () =>
  formData.value.form_fields.map(({ _id, _expanded, optionsRaw, ...rest }) => ({
    ...rest,
    options:
      rest.type === "select" || rest.type === "radio"
        ? optionsRaw
            .split("\n")
            .map((s) => s.trim())
            .filter(Boolean)
        : undefined,
  }));

const buildDatePayload = () => {
  if (formData.value.event_type === "single") {
    return {
      event_date: formData.value.event_start_time
        ? `${formData.value.event_date}T${formData.value.event_start_time}`
        : formData.value.event_date,
      event_end_date: formData.value.event_end_time
        ? `${formData.value.event_date}T${formData.value.event_end_time}`
        : null,
    };
  }
  return {
    event_date: formData.value.event_date,
    event_end_date: formData.value.event_end_date || null,
  };
};

const handleCreateEvent = async () => {
  if (bannerUploading.value) {
    toast.add({
      title: "Please wait",
      description: "Banner is still uploading.",
      color: "yellow",
    });
    return;
  }

  isCreating.value = true;
  try {
    const payload = {
      title: formData.value.title,
      ...buildDatePayload(),
      venue: formData.value.venue,
      description: formData.value.description,
      is_free: formData.value.is_free,
      currency: formData.value.is_free ? "₦" : formData.value.currency,
      admission_fee: formData.value.is_free ? 0 : formData.value.admission_fee,
      pricing_mode: formData.value.is_free ? null : formData.value.pricing_mode,
      pricing_tiers:
        formData.value.pricing_mode === "tiered" && !formData.value.is_free
          ? formData.value.pricing_tiers
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

    showSuccessModal.value = true;
    toast.add({
      title: "Event Created!",
      description: `"${formData.value.title}" has been successfully created.`,
      color: "green",
      timeout: 5000,
    });
  } catch (error) {
    toast.add({
      title: "Creation Failed",
      description: error.message || "An error occurred. Please try again.",
      color: "red",
      timeout: 7000,
    });
  } finally {
    isCreating.value = false;
  }
};

const goToEventsList = () => {
  showSuccessModal.value = false;
  router.push("/admin/events");
};

const createAnother = () => {
  showSuccessModal.value = false;
  formData.value = {
    title: "",
    event_type: "single",
    event_date: "",
    event_start_time: "",
    event_end_time: "",
    event_end_date: "",
    venue: "",
    description: "",
    admission_fee: 0,
    currency: "₦",
    is_free: true,
    pricing_mode: "flat",
    pricing_tiers: [],
    form_fields: "",
    banner_url: "",
  };
  if (descriptionEditor.value) descriptionEditor.value.innerHTML = "";
  removeBanner();
};

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
  color: #9ca3af;
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
  color: #acbea3;
  text-decoration: underline;
}
.rich-editor :deep(strong) {
  font-weight: 700;
}
.rich-editor :deep(em) {
  font-style: italic;
}
</style>
