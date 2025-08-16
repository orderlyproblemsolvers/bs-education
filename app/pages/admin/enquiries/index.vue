<template>
  <div class="bg-white shadow rounded-lg p-6 overflow-x-auto">
    <div class="mb-4">
      <NuxtLink
        to="/admin"
        class="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 font-medium"
      >
        ← Back to Dashboard
      </NuxtLink>
    </div>

    <div class="flex items-center justify-between mb-4 flex-wrap gap-2">
      <h2 class="text-xl font-semibold text-gray-800">Study Applications</h2>
      <button
        @click="exportToCSV"
        class="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded"
      >
        Export CSV
      </button>
    </div>

    <table class="min-w-full divide-y divide-gray-200 text-sm">
      <thead class="bg-gray-50">
        <tr>
          <th
            v-for="field in fields"
            :key="field.key"
            @click="sortBy(field.key)"
            class="px-4 py-2 text-left cursor-pointer whitespace-nowrap text-gray-700 hover:text-indigo-600"
          >
            {{ field.label }}
            <span v-if="sort.field === field.key">
              {{ sort.asc ? "↑" : "↓" }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        <tr
          v-for="entry in sortedData"
          :key="entry.id"
          class="hover:bg-gray-50"
        >
          <td class="px-4 py-2">{{ entry.first_name }}</td>
          <td class="px-4 py-2">{{ entry.last_name }}</td>
          <td class="px-4 py-2">{{ entry.email }}</td>
          <td class="px-4 py-2">{{ entry.phone }}</td>
          <td class="px-4 py-2">{{ entry.destination || "-" }}</td>
          <td class="px-4 py-2">{{ entry.study_level || "-" }}</td>
          <td class="px-4 py-2">{{ entry.study_time || "-" }}</td>
          <td class="px-4 py-2">{{ entry.counselling_mode || "-" }}</td>
          <td class="px-4 py-2">{{ entry.contact_pref ? "Yes" : "No" }}</td>
          <td class="px-4 py-2">{{ entry.receive_updates ? "Yes" : "No" }}</td>
          <td class="px-4 py-2">{{ entry.agree_terms ? "Yes" : "No" }}</td>
          <td class="px-4 py-2">{{ formatDate(entry.created_at) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Study Applications - Admin Dashboard",
  layout: "admin",
  middleware: (to) => {
    const user = useSupabaseUser()
    const { isAdmin } = useAuth()

    if (!user.value && !isAdmin.value) {
      return navigateTo('/admin/login')
    }
  },
});
import { ref, computed, onMounted } from "vue";
import { saveAs } from "file-saver";

const supabase = useSupabaseClient();

const applications = ref([]);
const sort = ref({ field: "created_at", asc: false });

const fields = [
  { key: "first_name", label: "First Name" },
  { key: "last_name", label: "Last Name" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
  { key: "destination", label: "Destination" },
  { key: "study_level", label: "Study Level" },
  { key: "study_time", label: "Study Time" },
  { key: "counselling_mode", label: "Counselling Mode" },
  { key: "contact_pref", label: "Contact Pref" },
  { key: "receive_updates", label: "Updates?" },
  { key: "agree_terms", label: "Agreed?" },
  { key: "created_at", label: "Submitted" },
];

onMounted(async () => {
  const { data, error } = await supabase
    .from("study_applications")
    .select(
      "id, first_name, last_name, email, phone, destination, study_level, study_time, counselling_mode, contact_pref, receive_updates, agree_terms, created_at"
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch applications:", error);
  } else {
    applications.value = data;
  }
});

// Sorting
const sortBy = (field) => {
  if (sort.value.field === field) {
    sort.value.asc = !sort.value.asc;
  } else {
    sort.value.field = field;
    sort.value.asc = true;
  }
};

const sortedData = computed(() => {
  const field = sort.value.field;
  const asc = sort.value.asc;
  return [...applications.value].sort((a, b) => {
    if (a[field] === null) return 1;
    if (b[field] === null) return -1;
    if (a[field] < b[field]) return asc ? -1 : 1;
    if (a[field] > b[field]) return asc ? 1 : -1;
    return 0;
  });
});

const formatDate = (date) =>
  new Date(date).toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

// Export to CSV
const exportToCSV = () => {
  const headers = fields.map((f) => f.label).join(",");
  const rows = applications.value.map((entry) => {
    return fields
      .map((f) => {
        const val = entry[f.key];
        if (typeof val === "boolean") return val ? "Yes" : "No";
        if (val === null || val === undefined) return "";
        return `"${val.toString().replace(/"/g, '""')}"`;
      })
      .join(",");
  });
  const csv = [headers, ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  saveAs(blob, `study-applications-${new Date().toISOString()}.csv`);
};
</script>

<style scoped>
th {
  user-select: none;
}
</style>
