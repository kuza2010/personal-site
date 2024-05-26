<template>
  <div class="tracking-wide">
    <h1 class="font-mono text-2xl font-bold mt-3">
      Work page
    </h1>
    <p class="mt-6">
      Over 5 years my mission is to create digital solutions for different kind of projects like startups, large
      government and product oriented companies. Here you can find a summary of my work so far.
    </p>

    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    <ResumeItem>
      <template #job-title>
        Sovcombank technologies
      </template>
      <template #job-summary>
        Senior Java software engineer, 2024 — present
      </template>
      <template #job-description>
        Sovcombank technologies - IT department of one of the most familiar bank. Focusing on the cultivation of
        innovative banking solutions on a daily basis.
      </template>
    </ResumeItem>

    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    <ResumeItem>
      <template #job-title>
        Digital league
      </template>
      <template #job-summary>
        Senior Java software engineer, 2023 — 2024
      </template>
      <template #job-description>
        Digital league helps transform various areas of the government. The company сovers a wide range of industries in
        the economy, including the public sector, energy, finance, telecommunications, and industry.
      </template>
      <template #job-description-detailed>
        <ul class="list-inside list-disc">
          Work in a couple of projects with approximately same responsibilities, like:
          <li>write complex core application logic</li>
          <li>launch the product from the skeleton</li>
          <li>help leading the team</li>
          <li>practices to improve code quality</li>
        </ul>
      </template>
    </ResumeItem>

    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    <ResumeItem>
      <template #job-title>
        Orion Innovation (ex MERA)
      </template>
      <template #job-summary>
        Java software engineer, 2018 — 2023
      </template>
      <template #job-description>
        I started my way here in MERA (the company was taken over). Orion Innovation is a global business and technology
        services firm that provides business solutions rooted in Digital Strategy, Experience Design, and Engineering.
      </template>
      <template #job-description-detailed>
        I have participated in several projects and always found something new.
        <br>
        Achievements:<br>
        <ul class="mb-1.5 list-inside list-disc">
          <li>interact with stakeholders specifying requirements, providing suggestions and improvements</li>
          <li>design technical solutions</li>
          <li>integrate support of mass storage devices to the Android application using libaums library</li>
          <li>development of the location&gps-based real-time Android application</li>
          <li>improved battery performance of an android application</li>
          <li>designed and implemented scheduler mechanism to the backend service based on quartz-scheduler</li>
          <li>
            integrate python scripts in backend service to have high flexibility in the hardware using (Java Process
            Builder);
          </li>
          <li>implement new features for web application (Vue.js)</li>
          <li>unit and integration tests</li>
          <li>support of CI/CD process</li>
          <li>performed technical Interviews of candidates</li>
        </ul>
        Used languages and technologies: Java (Spring), Kotlin (Spring, Android), Groovy (Spock framework), JavaScript
        (React, Vue), HTML, CSS, SASS, GIT, Azure (CosmosDB, DevOps), Gradle.
      </template>
    </ResumeItem>
  </div>
</template>

<script setup>
import {useHead} from 'unhead';

useHead({
  title: 'Work',
  meta: [
    {
      name: 'description',
      content: 'Artem Danilin resume. MERA, Orion Innovation, Лига Цифровой Экономики, Совкомбанк Технологии.'
    }
  ],
})
</script>
