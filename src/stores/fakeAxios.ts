import { ref } from 'vue' 
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import type { FakeData, Error } from '@/types/FakeData';
import { mockData } from '@/constants/fakeData'


const mock = new MockAdapter(axios, { delayResponse: 2000 });


mock  
  .onGet('/mock-api/data')
  .reply(200, {
  data: mockData,
});

export const useFakeDataStore = defineStore('fakeDataStore', () => {
  const data: Ref<FakeData[] | null> = ref(null);
  const error: Ref<Error | null> = ref(null);

  async function fetchData() {
    await axios.get('/mock-api/data')
      .then(response => {
        data.value = response.data.data;
      })
      .catch(error => {
        error.valie = error;
      });
  }

  return { data, error, fetchData }
})
