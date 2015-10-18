package com.program.test;

public class AppMain {

	public static void main(String[] args) {
		/*
		 * System.out.println(stringTimes("Hello", 2));
		 * System.out.println(stringTimes("Hi", 3));
		 * System.out.println(stringTimes("Hi", 1));
		 * 
		 * System.out.println(countXX("abcxx"));
		 * System.out.println(countXX("ccc"));
		 * System.out.println(countXX("xxxx"));
		 */
		// System.out.println(doubleX("axxbb"));
		System.out.println(doubleX("xaxxx"));
		// System.out.println(doubleX("xxxxx"));
	}

	public static String stringTimes(String str, int n) {
		String result = "";
		int len = 3;
		if (str.length() < len) {
			len = str.length();
		}
		for (int i = n; i > 0; i--) {
			result += str.substring(0, len);
		}
		return result;
	}

	public static int countXX(String str) {
		char[] st = str.toCharArray();
		int count = 0;
		for (int i = 0; i < st.length - 1; i++) {
			if (st[i] == 'x' && st[i + 1] == 'x') {
				count++;
			}
		}
		return count;
	}

	public static boolean doubleX(String str) {
		//String x = str.substring(str.indexOf('x'));
		if(str.indexOf('x')>=0){
			return str.substring(str.indexOf('x')).startsWith("xx");
		}
		return false;
		/*if (str.length() > 0 && (str.indexOf('x') < str.lastIndexOf('x'))) {
			if (str.charAt(str.indexOf('x')) == str.charAt(str.indexOf('x') + 1)) {
				return true;
			}
		}
		return false;*/
	}

}
