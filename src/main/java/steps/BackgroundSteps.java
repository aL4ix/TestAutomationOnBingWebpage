package steps;

import io.cucumber.java.After;
import io.cucumber.java.AfterStep;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import pages.HomePage;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

public class BackgroundSteps {
    private final TestContext testContext;
    private Scenario scenario;

    public BackgroundSteps(TestContext testContext) {
        this.testContext = testContext;
    }

    @Given("I opened {string} page")
    public void iOpenedBingPage(String webPage) {
        HomePage home = new HomePage(testContext.getUi());
        home.openHomePage(webPage);
    }

    @Then("Assert page title, header and search bar")
    public void assertPageTitleHeaderAndSearchBar() {
        HomePage home = new HomePage(testContext.getUi());
        // If bing is opened in a different language this values will be different, implying localization testing
        String imagesText = "Images";
        String languageText = "Español";
        String signInText = "Sign in";
        String rewardsText = "Rewards";
        home.assertTitleHeaderAndSearchBar(imagesText, languageText, signInText, rewardsText);
    }

    @Before
    public void before(Scenario scenario) {
        this.scenario = scenario;
    }

    @After
    public void after() throws IOException {
        if (scenario.isFailed()) {
            embedScreenshot("SCENARIO FAILED!");
        }
        testContext.getUi().quit();
    }

    @AfterStep
    public void afterStep() throws IOException {
        embedScreenshot("");
    }

    private void embedScreenshot(String name) throws IOException {
        File file = testContext.getUi().getScreenshot();
        scenario.embed(Files.readAllBytes(file.toPath()), "image/png", name);
    }
}
