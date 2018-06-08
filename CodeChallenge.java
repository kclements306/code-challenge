package com.byderbeck;

import java.util.Scanner;

class CodeChallenge {

    public static String QuestionsMarks(String str) {
        int question = 0;
        String answer = "false";
        for (int i = 0; i < str.length(); i++) {
            if (Character.isDigit(str.charAt(i))) {
                for (int j = i + 1; j < str.length(); j++) {
                    if (String.valueOf(str.charAt(j)).equals("?")) {
                        question += 1;
                    } else if (Character.isDigit(str.charAt(j))) {
                        if (question == 3 && Integer.parseInt(String.valueOf(str.charAt(j)))
                                + Integer.parseInt(String.valueOf(str.charAt(i))) == 10) {
                            answer = "true";
                            question = 0;
                            i = j;
                        } else if (Integer.parseInt(String.valueOf(str.charAt(j)))
                                + Integer.parseInt(String.valueOf(str.charAt(i))) == 10 && question != 3) {
                            return "false";
                        }
                    }
                }
            }
        }
        return answer;
    }

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print(QuestionsMarks(s.nextLine()));
        s.close();
    }
} 