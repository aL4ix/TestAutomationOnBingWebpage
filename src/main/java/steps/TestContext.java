package steps;

import io.cucumber.java.Before;
import ui.UI;

public class TestContext {
    private UI ui;

    @Before
    public void setup() {
        ui = new UI("firefox");
    }

    public UI getUi() {
        return ui;
    }
}
