package steps;

import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.When;
import pages.HomePage;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;

public class TrendingOnBingSteps {
    private final TestContext testContext;
    private Scenario scenario;

    public TrendingOnBingSteps(TestContext testContext) {
        this.testContext = testContext;
    }

    @When("Return titles, links URLs, image URLs of the Trending On Bing section")
    public void returnTitlesLinksURLsImageURLsOfTheTrendingOnBingSection() {
        ArrayList<String> titles = new ArrayList<>();
        ArrayList<String> urls = new ArrayList<>();
        ArrayList<String> images = new ArrayList<>();
        HomePage home = new HomePage(testContext.getUi());
        home.getTrendingOnBingSection(titles, urls, images);
        int length = Math.min(Math.max(titles.size(), Math.max(urls.size(), images.size())), 50); //Limit it to 50 elements
        for (int i = 0; i < length; i++) {
            // Here it will fail if there is a mismatch in the sizes of titles, urls and images
            // But in that case it would be because the page will be wrong, so it's OK to fail
            scenario.write(String.format("Title: %s\nURL: %s\nImage: %s\n", titles.get(i), urls.get(i), images.get(i)));
        }
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
