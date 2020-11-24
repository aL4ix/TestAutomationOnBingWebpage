package pages;

import ui.UI;

import java.util.ArrayList;

public class NewsPage {
    public static final String ITEMS_TITLE = "//div[contains(@class, 'newsitem')]//div[@class='t_t']/a";
    UI ui;

    public NewsPage(UI ui) {
        this.ui = ui;
    }

    public ArrayList<String> getResults() {
        return ui.getAttributeOfElements(ITEMS_TITLE, "");
    }

    public String getFirstResult() {
        return getResults().get(0);
    }
}
