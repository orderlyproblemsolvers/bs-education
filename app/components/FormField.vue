<!-- components/FormField.vue -->
<template>
  <div class="space-y-1">
    <label :for="field.label" class="block text-sm font-medium text-gray-700">
      {{ getFieldLabel(field.label) }}
      <span v-if="field.required" class="text-red-500 ml-1">*</span>
    </label>
    
    <!-- Text Input -->
    <input 
      v-if="field.type === 'text' || field.type === 'email' || field.type === 'tel' || field.type === 'number' || field.type === 'url'"
      :type="field.type"
      :id="field.label"
      :value="formData[field.label]"
      :required="field.required"
      :placeholder="getPlaceholder(field)"
      :disabled="disabled"
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5d6b56] focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
      @input="updateValue($event.target.value)"
      @blur="$emit('blur')"
    />
    
    <!-- Textarea -->
    <textarea 
      v-else-if="field.type === 'textarea'"
      :id="field.label"
      :value="formData[field.label]"
      :required="field.required"
      :placeholder="getPlaceholder(field)"
      :disabled="disabled"
      rows="4"
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5d6b56] focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
      @input="updateValue($event.target.value)"
    ></textarea>
    
    <!-- Select Dropdown -->
    <select 
      v-else-if="field.type === 'select'"
      :id="field.label"
      :value="formData[field.label]"
      :required="field.required"
      :disabled="disabled"
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5d6b56] focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
      @change="updateValue($event.target.value)"
    >
      <option value="">Select an option</option>
      <option 
        v-for="option in field.options" 
        :key="option" 
        :value="option"
      >
        {{ option }}
      </option>
    </select>
    
    <!-- Radio Group -->
    <div v-else-if="field.type === 'radio'" class="space-y-2">
      <div 
        v-for="option in field.options" 
        :key="option"
        class="flex items-center"
      >
        <input 
          type="radio"
          :id="`${field.label}_${option}`"
          :value="option"
          :checked="formData[field.label] === option"
          :required="field.required && !formData[field.label]"
          :disabled="disabled"
          class="h-4 w-4 text-[#5d6b56] focus:ring-[#5d6b56] border-gray-300"
          @change="updateValue(option)"
        />
        <label :for="`${field.label}_${option}`" class="ml-2 text-sm text-gray-700">
          {{ option }}
        </label>
      </div>
    </div>
    
    <!-- Checkbox -->
    <div v-else-if="field.type === 'checkbox'" class="flex items-center">
      <input 
        type="checkbox"
        :id="field.label"
        :checked="formData[field.label]"
        :required="field.required && !formData[field.label]"
        :disabled="disabled"
        class="h-4 w-4 text-[#5d6b56] focus:ring-[#5d6b56] border-gray-300 rounded"
        @change="updateValue($event.target.checked)"
      />
      <label :for="field.label" class="ml-2 text-sm text-gray-700">
        {{ getFieldLabel(field.label) }}
      </label>
    </div>
    
    <!-- Date Input -->
    <input 
      v-else-if="field.type === 'date'"
      type="date"
      :id="field.label"
      :value="formData[field.label]"
      :required="field.required"
      :disabled="disabled"
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5d6b56] focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
      @input="updateValue($event.target.value)"
    />
    
    <!-- File Upload -->
    <input 
      v-else-if="field.type === 'file'"
      type="file"
      :id="field.label"
      :accept="field.accept"
      :required="field.required"
      :disabled="disabled"
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5d6b56] focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#5d6b56] file:text-white hover:file:bg-[#9BAD94]"
      @change="handleFileUpload($event)"
    />
    
    <!-- Help Text -->
    <p v-if="getHelpText(field)" class="text-xs text-gray-500 mt-1">
      {{ getHelpText(field) }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  field: {
    type: Object,
    required: true
  },
  formData: {
    type: Object,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update', 'blur'])

const updateValue = (value) => {
  emit('update', { field: props.field, value })
}

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    // Handle file upload logic here
    emit('update', { field: props.field, value: file.name })
  }
}

const getFieldLabel = (label) => {
  return label.split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

const getPlaceholder = (field) => {
  const placeholderMap = {
    email: 'Enter your email address',
    tel: 'Enter your phone number',
    url: 'https://example.com',
    number: 'Enter a number',
    textarea: 'Enter your response here...'
  }
  
  return placeholderMap[field.type] || `Enter ${getFieldLabel(field.label).toLowerCase()}`
}

const getHelpText = (field) => {
  const helpMap = {
    email: "We'll use this to send you event updates",
    tel: 'Include country code for international numbers',
    url: 'Include http:// or https://'
  }
  
  return helpMap[field.type] || field.help_text || null
}
</script>