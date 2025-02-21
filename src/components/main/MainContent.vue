<template>
    <main class="text-white py-16 px-4">
      <h2 class="text-3xl font-semibold text-center">Popular Destinations</h2>
      <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="destination in destinations" :key="destination.name" class="rounded-lg overflow-hidden shadow-xl bg-white">
          <img :src="destination.image" alt="Destination" class="w-full h-40 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-semibold">{{ destination.name }}</h3>
            <p class="text-sm text-gray-600">{{ destination.description }}</p>
            <button class="mt-4 bg-primary text-white py-2 px-4 rounded-lg">
              Explore
            </button>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import m1 from '@/assets/images/m-c-1.jpg'
  import m2 from '@/assets/images/m-c-2.jpg'
  import m3 from '@/assets/images/m-c-3.jpg'
  const destinations = [
    {
      name: 'Paris',
      description: 'The City of Light, known for its art, culture, and history.',
      image: m1,
    },
    {
      name: 'Hawaii',
      description: 'Tropical paradise with stunning beaches and volcanic landscapes.',
      image: m2,
    },
    {
      name: 'Tokyo',
      description: 'A perfect blend of tradition and technology.',
      image: m3,
    },
  ]
  </script>
  
  <style scoped>
  /* 这里可以根据需求添加样式 */
  </style>
  