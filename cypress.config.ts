import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'



async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
    await addCucumberPreprocessorPlugin(on, config)

    on(
        'file:preprocessor',
        createBundler({
            plugins: [createEsbuildPlugin(config)],
        })
    )

    return config
}

export default defineConfig({
    e2e: {
        baseUrl: "https://www.webdriveruniversity.com/",
        defaultCommandTimeout: 10000,
        viewportWidth: 400,
        viewportHeight: 900,
        specPattern: '**/*.feature',
        setupNodeEvents,

    },
})






