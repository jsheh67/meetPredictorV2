package webscraper;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;

public class DopeSheet {

    public static void main(String[] args) throws IOException {
        File sheet = new File("sheet.csv");
        try {
            if (sheet.createNewFile()) {
                System.out.println("colors.txt created.");
            } else {
                System.out.println("colors.txt already exists.");
            }
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        FileWriter fileWriter = new FileWriter("colors.txt", true);
        PrintWriter writer = new PrintWriter(fileWriter);
        {
           writer.println("event, Team2, Team2");

        }

    }
}
