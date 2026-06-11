import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

import controller.MainController;

public class MainApp extends Application {

    @Override
    public void start(Stage stage) {

        MainController controller = new MainController();

        Label status = new Label("Traffic System Ready");
        Button startBtn = new Button("Start Simulation");

        startBtn.setOnAction(e -> {
            controller.startSystem();
            status.setText("Simulation Running...");
        });

        VBox root = new VBox(15, status, startBtn);
        Scene scene = new Scene(root, 400, 250);

        stage.setTitle("Traffic Controller System");
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}