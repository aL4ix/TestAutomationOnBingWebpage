package pages;

import ui.UI;

import java.time.LocalDate;
import java.util.ArrayList;

public class ResultsPage {
    public static final String OPTIONS_DATE = "//div[@id='b_tween']//span[@class='sb_count']/following::a[1]";
    public static final String DATE_RANGE_START = "//input[@id='date_range_start']";
    public static final String CALENDAR_DAY = "//body/div[contains(@class,'infobubble')]//div[@class='cal_day_text'][text()='%d']";
    public static final String DATE_RANGE_END = "//input[@id='date_range_end']";
    public static final String DATE_APPLY = "//a[@id='time_filter_done_link']";
    public static final String SEARCH_RESULTS_TITLES = "//ol[@id='b_results']/li//h2/a";
    public static final String NAV_TAB = "//nav[@class='b_scopebar']//a[text()='%s']";
    UI ui;

    public ResultsPage(UI ui) {
        this.ui = ui;
    }

    public String getResultsCount() {
        return ui.getText("//span[@class='sb_count']");
    }

    public ResultsPage selectDateRange(LocalDate start, LocalDate end) {
        ui.click(OPTIONS_DATE);
        if (!ui.visibilityOfElement(DATE_RANGE_START)) {
            ui.click(OPTIONS_DATE);
        }
        ui.click(DATE_RANGE_START);
        // Add support for months and years
        String xpathCalendarDay = String.format(CALENDAR_DAY, start.getDayOfMonth());
        ui.click(xpathCalendarDay);
        if (!ui.visibilityOfElement(xpathCalendarDay)) {
            ui.click(DATE_RANGE_END);
        }
        ui.click(xpathCalendarDay);
        ui.click(DATE_APPLY);
        return this;
    }

    public ArrayList<String> getSearchResults() {
        return ui.getAttributeOfElements(SEARCH_RESULTS_TITLES, "");
    }

    public NewsPage selectTab(String tabName) {
        ui.click(String.format(NAV_TAB, tabName));
        return new NewsPage(ui);
    }
}
