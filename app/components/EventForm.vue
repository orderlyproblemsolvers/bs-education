<template>
    <UForm :state="state" @submit="onSubmit">
      <UCard>
        <div class="space-y-6">
          <UFormGroup label="Event Title" name="title" required>
            <UInput v-model="state.title" placeholder="e.g., Annual Tech Conference" />
          </UFormGroup>
  
          <UFormGroup label="Event Date & Time" name="event_date" required>
              <input type="datetime-local" v-model="state.event_date" class="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700" />
          </UFormGroup>
  
          <UFormGroup label="Venue" name="venue">
            <UInput v-model="state.venue" placeholder="e.g., Grand Hall, Lagos" />
          </UFormGroup>
  
          <UFormGroup label="Description" name="description">
            <UTextarea v-model="state.description" :rows="5" placeholder="Describe the event..." />
          </UFormGroup>
  
          <UDivider label="Registration Form Builder (Optional)" />
          
          <div class="p-4 border border-dashed rounded-lg space-y-4">
              <p v-if="state.form_fields.length === 0" class="text-sm text-gray-500">No registration fields added. Add fields if you want users to register for this event.</p>
              
              <div v-for="(field, index) in state.form_fields" :key="index" class="flex items-end space-x-2 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-md">
                  <UFormGroup :label="`Field ${index + 1} Label`" class="flex-grow">
                      <UInput v-model="field.label" placeholder="e.g., Full Name" />
                  </UFormGroup>
                  <UFormGroup label="Type">
                      <USelect v-model="field.type" :options="['text', 'email', 'tel', 'checkbox']" />
                  </UFormGroup>
                  <UFormGroup label="Required">
                      <UCheckbox v-model="field.required" class="mt-2" />
                  </UFormGroup>
                  <UButton color="red" variant="soft" icon="i-heroicons-x-mark" @click="removeField(index)" />
              </div>
  
              <UButton type="button" variant="outline" icon="i-heroicons-plus" @click="addField">
                  Add Field
              </UButton>
          </div>
        </div>
  
        <template #footer>
          <UButton type="submit" size="lg" :loading="loading">
              {{ event ? 'Update Event' : 'Create Event' }}
          </UButton>
        </template>
      </UCard>
    </UForm>
  </template>
  
  <script setup>
  const props = defineProps({
    event: {
      type: Object,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    }
  });
  
  const emit = defineEmits(['submit']);
  
  const state = reactive({
    title: props.event?.title || '',
    // HTML datetime-local input needs YYYY-MM-DDTHH:mm format
    event_date: props.event?.event_date ? new Date(props.event.event_date).toISOString().slice(0, 16) : '',
    description: props.event?.description || '',
    venue: props.event?.venue || '',
    // Ensure form_fields is always an array
    form_fields: props.event?.form_fields ? JSON.parse(JSON.stringify(props.event.form_fields)) : [],
  });
  
  const addField = () => {
    state.form_fields.push({ label: '', type: 'text', required: false });
  };
  
  const removeField = (index) => {
    state.form_fields.splice(index, 1);
  };
  
  const onSubmit = () => {
    // Convert date back to a full ISO string for Supabase timestampz
    const submissionData = {
      ...state,
      event_date: new Date(state.event_date).toISOString(),
      // Filter out empty fields before submitting
      form_fields: state.form_fields.filter(f => f.label.trim() !== '')
    };
    emit('submit', submissionData);
  };
  </script>