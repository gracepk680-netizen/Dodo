# Dodo
Date Calculator
from datetime import datetime

def calculate_days(date_str1, date_str2, date_format="%Y-%m-%d"):
    # Convert string dates to datetime objects
    date1 = datetime.strptime(date_str1, date_format)
    date2 = datetime.strptime(date_str2, date_format)
    
    # Calculate the absolute difference in days
    days_difference = abs((date1 - date2).days)
    
    # Add 1 day
    total_days = days_difference + 1
    
    return total_days

if __name__ == "__main__":
    start_date = "2023-10-01"
    end_date = "2023-10-10"
    
    result = calculate_days(end_date, start_date)
    print(f"The number of days between {start_date} and {end_date} plus 1 day is: {result}")
  
