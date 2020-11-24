package pages;

import org.junit.Assert;
import org.openqa.selenium.Keys;
import ui.UI;

import java.util.ArrayList;

public class HomePage {
    public static final String HEADER_LOGO = "//header//*[@class='logo']";
    public static final String HEADER_IMAGES = "//header//li[@id='images']/a";
    public static final String HEADER_LANG = "//header//a[@class='sw_lang']";
    public static final String HEADER_SIGNIN = "//header//a[@id='id_l']/span[@id='id_s']";
    public static final String HEADER_AVATAR = "//header//a[@id='id_l']/span[contains(@class, 'id_avatar')]";
    public static final String HEADER_REWARDS = "//header//a[@id='id_rh']/span[@id='id_rc']";
    public static final String HEADER_REWARDS_ICON = "//header//a[@id='id_rh']//*[@id='rh_meter']";
    public static final String HEADER_BURGER = "//header//div[@id='id_h']//a[@id='id_sc']";
    public static final String SEARCH_BAR = "//form/input[@name='q']";
    public static final String TRENDING_TITLES = "//ul[@id='news_interest_tile']//div[@class='hp_text']";
    public static final String TRENDING_URLS = "//ul[@id='news_interest_tile']//a";
    public static final String TRENDING_IMAGES = "//ul[@id='news_interest_tile']//img";
    UI ui;

    public HomePage(UI ui) {
        this.ui = ui;
    }

    public HomePage openHomePage(String webPage) {
        ui.get(webPage);
        return this;
    }

    public HomePage assertTitleHeaderAndSearchBar(String imagesText, String languageText, String signInText, String rewardsText) {
        ui.waitForVisibilityOfElement(HEADER_LOGO); // For some reason using the tag svg didn't work
        String images = ui.getText(HEADER_IMAGES);
        Assert.assertEquals(imagesText, images);
        String language = ui.getText(HEADER_LANG);
        Assert.assertEquals(languageText, language);
        String signIn = ui.getText(HEADER_SIGNIN);
        Assert.assertEquals(signInText, signIn);
        ui.waitForVisibilityOfElement(HEADER_AVATAR);
        String rewards = ui.getText(HEADER_REWARDS);
        Assert.assertEquals(rewardsText, rewards);
        ui.waitForVisibilityOfElement(HEADER_REWARDS_ICON);
        ui.waitForVisibilityOfElement(HEADER_BURGER);
        ui.waitForVisibilityOfElement(SEARCH_BAR);
        return this;
    }

    public ResultsPage search(String textToSearch) {
        ui.sendKeys(SEARCH_BAR, textToSearch);
        ui.sendKeys(SEARCH_BAR, Keys.ENTER);
        return new ResultsPage(ui);
    }

    public HomePage getTrendingOnBingSection(ArrayList<String> titles, ArrayList<String> urls, ArrayList<String> images) {
        titles.addAll(ui.getAttributeOfElements(TRENDING_TITLES, ""));
        urls.addAll(ui.getAttributeOfElements(TRENDING_URLS, "href"));
        images.addAll(ui.getAttributeOfElements(TRENDING_IMAGES, "src"));
        return this;
    }
}
