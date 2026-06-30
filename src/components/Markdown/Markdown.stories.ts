import type { StoryObj, Meta } from '@storybook/react-webpack5';
import type React from 'react';

import { Markdown } from './Markdown';

export default {
  title: 'Components/Markdown',
  component: Markdown,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
  tags: ['beta', 'version:1.0'],
} as Meta<Args>;

type Args = React.ComponentProps<typeof Markdown>;

export const Default: StoryObj<Args> = {
  args: {
    children: `# Introduction

Source for Testing Images: <https://picsum.photos/200/300>

This is an introductory block of text, with no additional formatting. **Strength** can be added, as well as *emphasis*.

## Details

### Lists

#### Unordered

Here are a list of items:

- Item One
- Item Two
- Item Three

----

* Item A
* Item B
* Item C

#### Ordered

1. First Item
2. Second Item
3. Third Item

### Block Quotes

> Including a block quote to demonstrate appearance.
> This should apply across multiple lines.

### Code

#### Inline & Pre-formatted

To run a command try the following: \`shell.py init\` which prints:

    Some output from the above!
    When indented, it spans multiple lines.

#### MultiLine

~~~cpp
#include <iostream.h> 
#include <iomanip.h> 
#include <fstream.h>	// To send the data to a text file 
#include <conio.h>		// For the getch() function 
#include <stdlib.h>

// This program calculates the cost of a gas fillup when the miles
// travelled, the miles per gallon, and the price of a gallon of gas
// is inputed. It also keeps track of the total transactions and sums
// the total of all gas sales. This information is sent to a text file
// on the desktop named dailyrpt.txt.

int main() 
{ 
  // Defining output function 
  ofstream trans_cash; 

  int mpg, // Variables being initialized... 
    miles, 
    trans = 0,
    month,
    day,
    year;
 
  
  char slash;	// character in the dates

  double price_gal,
    gallons,
    avg_gallons,
    avg_cost,
    avg_price_gal,
    total_gallons = 0,
    total_price_gal = 0,
    cost, 
    total_cost = 0.0; // ...Variables initialized 


  // Open the output file for the total price and transaction output 
  trans_cash.open("C:\\windows\\desktop\\dailyrpt.txt"); 

  // Setting precision and value output style 
  cout << setprecision(2) << setiosflags(ios::fixed | ios::showpoint); 

  // Greeting and input... 

  cout << "\\nWelcome to the Gas Register Cashier"; 
  cout << "\\n-----------------------------------" << "\\n"; 

  cout << "\\nTo begin, enter the date (i.e. 01/01/2001)" << endl;
  cin >> month >> slash >> day >> slash >> year;		//Input the date

  cout << "\\nPlease input requested values. If you want to quit, simply type -1 in" << "\\n 'Miles Travelled' Data to exit."; 
  cout << "\\n" << "\\n"; 

  cout << "Miles Travelled: ";	// Input miles
  cin >> miles; 


  // Loop begin: Calculator 

  while (miles >= 0) 
  { 

    cout << "Miles per Gallon for Your Car: "; 
    cin >> mpg; 

    cout << "Price Per Gallon You're Paying: "; 
    cin >> price_gal; 

    ++trans; // Adds one to the counter, keeping control of transactions 

    gallons = double(miles) / double(mpg); // Calculations... 
    cost = gallons * price_gal; 

    total_cost += cost;						// Averaging calculations
    total_gallons += gallons;
    total_price_gal += price_gal;

    // ...end 

    // Displaying data entry information 

    trans_cash << setiosflags(ios::fixed | ios::showpoint) << setprecision(2);
    trans_cash << "\\nMiles per Gallon:" << setw(9) << mpg; 
    trans_cash << "\\nMiles Travelled:" << setw(10) << miles << endl << endl; 

    trans_cash << "Number of Gallons: " << setw(7) << gallons; 
    trans_cash << setprecision(3); // Setting Precision for gas price 
    trans_cash << "\\nPrice per Gallon: " << setw(8) << price_gal << endl; 

    trans_cash << setprecision(2); // Re-setting precision for final total 
    trans_cash << "\\n--------------------------"; 
    trans_cash << "\\nCost of Fillup: " << setw(10) << cost << setw(15) << "Transaction: " << trans; 
    trans_cash << "\\n--------------------------" << endl << endl;


    system("cls");		// clears the screen

    cout << endl << "\\nRe-enter values. Again, type -1 in 'Miles Travelled' to exit." << endl; 
    cout << "Miles Travelled: "; 
    cin >> miles; 

  } 

  // Final Calculations
  avg_cost = total_cost / double(trans);
  avg_gallons = total_gallons / double(trans);
  avg_price_gal = total_price_gal / double(trans);

  // Final output 
  trans_cash << setprecision(2) << setiosflags(ios::fixed) << setiosflags(ios::showpoint);
  trans_cash << "\\nDaily Report for " << month << slash << day << slash << year;
  trans_cash << endl; 
  trans_cash << "================================" << endl; 
  trans_cash << "Number of Sales: " << setw(15) << trans << endl; 
  trans_cash << "Total Gallons Sold: " << setw(12) << total_gallons << endl;
  
  trans_cash << endl;

  trans_cash << setprecision(3);
  trans_cash << "Average price per Gallon: " << setw(6) << avg_price_gal << endl;
  trans_cash << setprecision(2);

  trans_cash << "Total Sales: " << setw(19) << total_cost << endl; 

  trans_cash << endl;

  trans_cash << "Average Gallons: " << setw(15) << avg_gallons << endl;
  trans_cash << "Average Sale: " << setw(18) << avg_cost << endl;
  trans_cash << "--------------------------------";
  
  
  // Name Entry
  trans_cash << "\\nPrepared by:" << setw(20) << "Andrew Holloway";
  // Output file located at C:\\windows\\desktop\\dailyrpt.txt

  // Closing the generated file 
  trans_cash.close(); 

  getch();	// Hit a key function

  return 0; 
}
~~~

##### Miscellaneous

###### Links

Here's a link to [CommonMark][common-mark].

[common-mark]: https://commonmark.org/
`,
  },
};

export const GithubFlavoredMarkdown: StoryObj<Args> = {
  args: {
    children: `
# GitHub-Flavored Markdown

## Tables

| a | b  |  c |  d  |
| - | :- | -: | :-: |
| 1 | 2  | 3  | 4   |
`,
  },
};
