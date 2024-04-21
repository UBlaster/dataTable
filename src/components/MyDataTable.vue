<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import type { Ref } from 'vue';

import { useFakeDataStore } from '@/stores/fakeAxios';
import type { FakeData } from '@/types/FakeData';

import StatusController from '@/components/StatusController.vue';
 
const fakeDataStore = useFakeDataStore();

const isLoading = ref(true)
const selectedControllers: Ref<Boolean[] | null>= ref(null);
const controllers: Ref<FakeData[] | null> = ref([]);

const wordWrap = { 
  'white-space': 'normal', 
  'word-wrap': 'break-word' 
}


onBeforeMount(async () =>{
  await fakeDataStore.fetchData();

  controllers.value = fakeDataStore.data;
  isLoading.value = false;
 
});

</script>

<template>
  <DataTable 
    :value="controllers" 
    v-model:selection="selectedControllers"
    dataKey="id"
    tableStyle="min-width: 50rem, width: 100vw" 
    :resizableColumns="true" 
    :loading="isLoading" 
    stripedRows
  >
    <Column selectionMode="multiple" field="select"></Column>
    <Column field="createdAt" header="Added" :bodyStyle="wordWrap"></Column>
    <Column field="ipAddress" header="IP - address" :bodyStyle="wordWrap"></Column>
    <Column field="macAddress" header="MAC - address" :bodyStyle="wordWrap"></Column>
    <Column field="status" header="Status" :bodyStyle="wordWrap">
      <template #body="{data}">
        <StatusController :status="data.status"></StatusController>
      </template>
    </Column>
    <Column field="version" header="Version"></Column>
  </DataTable>
</template>


<style lang="scss">
.p-datatable {

  width: 100%;

  & thead th {
    border-right: 1px solid #ccc; 
  }

  & thead th:last-child {
    border-right: none;    
  }
}

</style>