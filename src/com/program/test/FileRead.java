package com.program.test;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;

public class FileRead {

	public static void main(String[] args) {
		findVideoID("watch.htm");
//		removeDuplicates("download.txt");
	}

	private static void findVideoID(String filename) {
		// The name of the file to open.
		String fileName = filename;

		// This will reference one line at a time
		String line = null;
		Collection<String> outputSet = new HashSet<String>();
		try {
			// FileReader reads text files in the default encoding.
			FileReader fileReader = new FileReader(fileName);

			// Always wrap FileReader in BufferedReader.
			BufferedReader bufferedReader = new BufferedReader(fileReader);

			while ((line = bufferedReader.readLine()) != null) {
				if (line.contains("/watch?v=")) {
					// System.out.println(line);
					// System.out.println(line.indexOf("?v="));
					// System.out.println(line.substring(line.indexOf("?v=")+3,line.indexOf("?v=")+14));
					outputSet.add(line.substring(line.indexOf("?v=") + 3, line.indexOf("?v=") + 14));
				}
			}

			Iterator<String> iter = outputSet.iterator();
			// int count = 0;
			while (iter.hasNext()) {
				System.out.println(iter.next().toString());
				// count++;
			}
			// System.out.println(count);
			// Always close files.
			bufferedReader.close();
		} catch (FileNotFoundException ex) {
			System.out.println("Unable to open file '" + fileName + "'");
		} catch (IOException ex) {
			System.out.println("Error reading file '" + fileName + "'");
			// Or we could just do this:
			// ex.printStackTrace();
		}
	}

	private static void removeDuplicates(String filename) {
		String line = null;
		Collection<String> outputSet = new HashSet<String>();
		try {
			FileReader fileReader = new FileReader(filename);
			BufferedReader bufferedReader = new BufferedReader(fileReader);

			while ((line = bufferedReader.readLine()) != null) {
					outputSet.add(line);
			}

			Iterator<String> iter = outputSet.iterator();
			while (iter.hasNext()) {
				System.out.println(iter.next().toString());
			}
			bufferedReader.close();
		} catch (FileNotFoundException ex) {
			System.out.println("Unable to open file '" + filename + "'");
		} catch (IOException ex) {
			System.out.println("Error reading file '" + filename + "'");
		}
	}

	private static void youTubeSearch() {
		/*
		 * YouTubeQuery query = new YouTubeQuery(new
		 * URL("http://gdata.youtube.com/feeds/api/videos")); // order results
		 * by the number of views (most viewed first)
		 * query.setOrderBy(YouTubeQuery.OrderBy.VIEW_COUNT);
		 * 
		 * // search for puppies and include restricted content in the search
		 * results query.setFullTextQuery("puppy");
		 * query.setSafeSearch(YouTubeQuery.SafeSearch.NONE);
		 * 
		 * VideoFeed videoFeed = service.query(query, VideoFeed.class);
		 * 
		 */
	}
}
