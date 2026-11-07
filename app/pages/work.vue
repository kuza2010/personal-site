<template>
  <div class="tracking-wide">
    <h1 class="font-mono text-2xl font-bold mt-3">
      Work page
    </h1>
    <p class="mt-6">
      Over 8 years my mission is to create digital solutions for different kind of projects like startups, large
      government and product oriented companies. Here you can find a summary of my work so far.
    </p>
    <p class="mt-3">
      You can read or
      <InPlaceLink
        class="font-bold"
        to="/CV_Danilin_Artem.pdf"
        display-text="download"
        open-in-new-tab
      />
      my resume.
    </p>

    <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
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
      <template #job-description-detailed>
        Achievements:<br>
        <ul class="list-inside list-disc">
          <li>modernized a legacy Java EE codebase (JBoss, JSF) while maintaining and improving business-critical
            functionality
          </li>
          <li>
            led the development of a reactive, high-load service for a new insurance product, from initial design
            through
            production launch; the product attracted more than RUB 100 million in pension assets during its first year
          </li>
          <li>develop and maintain internal tools that automate the release process, reducing manual work for team leads
            and shortening the overall release cycle
          </li>
          <li>
            developed solutions to optimize business processes in the insurance division's internal document management
            system, automating document workflows with AI tools and eliminating up to one month of manual work per year
            across the department
          </li>
          <li>participated in the company's mentoring program, helping newcomers onboard and supporting the professional
            growth and retention of middle-level engineers
          </li>
        </ul>
      </template>
      <template #job-technologies>
        Java 21, Spring Boot, WebFlux, Kubernetes, JBoss, JUnit, JaCoCo, Maven, Gradle, Sybase ASE, PostgreSQL, SOAP,
        CI/CD, Prometheus, Grafana, Grafana k6.
      </template>
    </ResumeItem>

    <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
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
        Achievements:<br>
        <ul class="list-inside list-disc">
          <li>worked across multiple projects, taking ownership of complex core application logic and backend
            functionality
          </li>
          <li>led backend development from the ground up on several projects, taking them from initial scaffolding to
            successful production launches
          </li>
          <li>mentored junior developers in the company's internship program, delivering technical training and guiding
            interns
          </li>
          <li>introduced and promoted code quality practices, improving maintainability, consistency and overall
            development standards across projects
          </li>
        </ul>
      </template>
      <template #job-technologies>
        Java, Spring Boot, JPA, Hibernate Envers, JUnit, JaCoCo, Maven, PostgreSQL, SOAP, CI/CD, Kubernetes.
      </template>
    </ResumeItem>

    <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
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
        Achievements:<br>
        <ul class="list-inside list-disc">
          <li>
            designed and implemented a hardware-agnostic integration architecture for external devices, including smart
            plugs, decoupling hardware from the main application layer and reducing development and integration effort
          </li>
          <li>
            optimized application performance and infrastructure for a platform, enabling the client to launch
            manufacturing operations in a new service facility; designed and developed the software used to support
            day-to-day production floor operations
          </li>
          <li>
            proposed and led the implementation of a server-side UI composition API for mobile and desktop platforms,
            enabling clients to customize their interfaces to better fit their business needs and increasing client
            satisfaction and loyalty
          </li>
          <li>
            built strong client relationships through consistent delivery and technical ownership, helping bring two
            additional projects to the team after the success of the initial engagement
          </li>
        </ul>
      </template>
      <template #job-technologies>
        Kotlin, Groovy, Spring Boot, AsciiDoc, JUnit, Spock, Hamcrest, Microsoft Azure, PostgreSQL, Keycloak, Apache
        Kafka, RabbitMQ.
      </template>
    </ResumeItem>

    <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
    <ResumeItem>
      <template #job-title>
        SI-ART LLC
      </template>
      <template #job-summary>
        Software developer, 2018
      </template>
    </ResumeItem>
  </div>
</template>

<script setup>
import InPlaceLink from '~/components/link/InPlaceLink.vue';
import {useHead} from '#imports';

useHead({
  title: 'Work',
  meta: [
    {
      name: 'description',
      content: 'Danilin Artem resume. Sovcombank Technologies | Digital League | Orion Innovation | SI-ART LLC.'
    }
  ],
})
</script>
