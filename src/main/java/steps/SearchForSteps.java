package steps;

import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import pages.HomePage;
import pages.NewsPage;
import pages.ResultsPage;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.time.LocalDate;
import java.util.ArrayList;

public class SearchForSteps {
    private final TestContext testContext;
    private String savedFirstNewsEntry;
    private Scenario scenario;

    public SearchForSteps(TestContext testContext) {
        this.testContext = testContext;
    }

    @When("I search for {string}")
    public void iSearchForSomething(String textToSearch) {
        HomePage home = new HomePage(testContext.getUi());
        home.search(textToSearch);
    }

    @Then("Return how many results were found")
    public void returnHowManyResultsWereFound() {
        ResultsPage results = new ResultsPage(testContext.getUi());
        String resultsCount = results.getResultsCount();
        scenario.write(String.format("Results Count: %s", resultsCount));
    }

    @When("I customize search date to be today")
    public void iCustomizeSearchDateToBeToday() {
        ResultsPage results = new ResultsPage(testContext.getUi());
        LocalDate today = LocalDate.now();
        results.selectDateRange(today, today);
    }

    @Then("Return search results on the first page")
    public void returnSearchResultsOnTheFirstPage() {
        returnHowManyResultsWereFound();
        ResultsPage results = new ResultsPage(testContext.getUi());
        ArrayList<String> searchResults = results.getSearchResults();
        scenario.write(String.join("\n", searchResults));
    }

    @When("I go to the {string} tab")
    public void iGoToTheSomethingTab(String tabName) {
        ResultsPage results = new ResultsPage(testContext.getUi());
        results.selectTab(tabName);
    }

    @Then("Save the first result")
    public void saveTheFirstResult() {
        NewsPage news = new NewsPage(testContext.getUi());
        savedFirstNewsEntry = news.getFirstResult();
        scenario.write(String.format("Saved: %s", savedFirstNewsEntry));
    }

    @Then("Assert the first result")
    public void assertTheFirstResult() {
        NewsPage news = new NewsPage(testContext.getUi());
        String actualFirstNewsEntry = news.getFirstResult();
        scenario.write(String.format("Actual: %s", actualFirstNewsEntry));
        scenario.write(String.format("Expected: %s", savedFirstNewsEntry));
        Assert.assertEquals(savedFirstNewsEntry, actualFirstNewsEntry);
    }

    @Before
    public void before(Scenario scenario) {
        this.scenario = scenario;
    }

    private void embedScreenshot(String name) throws IOException {
        File file = testContext.getUi().getScreenshot();
        scenario.embed(Files.readAllBytes(file.toPath()), "image/png", name);
    }
}
