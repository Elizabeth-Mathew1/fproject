import gspread
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

def getdata():
    gc = gspread.service_account(filename='secretkey.json')
    sh=gc.open('cancerPred')
    worksheet=sh.worksheet('Details_1')
    df=pd.DataFrame(worksheet.get_all_records())
    return df
df=getdata()
print(df)


# Image for distribution between age and lung cancer


ages = df['Age']
lung_cancer = df['Cancer']

# Separate ages based on lung cancer status
cancer_ages = [age for age, cancer in zip(ages, lung_cancer) if cancer=="Yes"]
non_cancer_ages = [age for age, cancer in zip(ages, lung_cancer) if not cancer=="No"]

# Define age ranges
age_ranges = ['20-30','30-39', '40-49', '50-59', '60+']

# Count the number of people in each age range with lung cancer
cancer_counts = [len([age for age in cancer_ages if 30 <= age < 40]),
                 len([age for age in cancer_ages if 20 <= age < 30]),
                 len([age for age in cancer_ages if 40 <= age < 50]),
                 len([age for age in cancer_ages if 50 <= age < 60]),
                 len([age for age in cancer_ages if age >= 60])]
print(cancer_counts)
fig = plt.figure()
ax = fig.add_axes([0.15,0.1 , 0.8, 0.8])
ax.bar(age_ranges, cancer_counts)
ax.set_title('Distribution of Lung Cancer by Age Range')
ax.set_xlabel('Age Range')
ax.set_ylabel('Number of People')
plt.show()
fig.savefig('../public/lc_age.png')


places = df['Place']
lung_cancer = df['Cancer']

# Separate places based on lung cancer status
cancer_places = [place for place, cancer in zip(places, lung_cancer) if cancer == "Yes"]
non_cancer_places = [place for place, cancer in zip(places, lung_cancer) if not cancer == "No"]

# Get unique places
unique_places = list(set(places))
x = range(len(unique_places))
# Count the number of people in each place with lung cancer
cancer_counts = [len([place for place in cancer_places if place == p]) for p in unique_places]

fig = plt.figure()
ax = fig.add_axes([0.15, 0.1, 0.8, 0.8])
ax.bar(unique_places, cancer_counts)
ax.set_title('Distribution of Lung Cancer by Place')

# Set the x-axis tick labels to the unique places with rotation
ax.set_xticks(x)
ax.set_xticklabels(unique_places, rotation=35)


ax.set_xlabel('Place')
ax.set_ylabel('Number of People')
plt.show()
fig.savefig('../public/lc_place.png')


smoking_status = df['Smoking']
print(df['Smoking'])
alcohol_status = df['Alcohol']
lung_cancer = df['Cancer']

# Separate data based on lung cancer status
cancer_smoking = [smoking for smoking, cancer in zip(smoking_status, lung_cancer) if cancer == "Yes"]
non_cancer_smoking = [smoking for smoking, cancer in zip(smoking_status, lung_cancer) if not cancer == "No"]

cancer_alcohol = [alcohol for alcohol, cancer in zip(alcohol_status, lung_cancer) if cancer == "Yes"]
non_cancer_alcohol = [alcohol for alcohol, cancer in zip(alcohol_status, lung_cancer) if not cancer == "No"]

# Get unique smoking and alcohol status
unique_smoking = list(set(smoking_status))
unique_alcohol = list(set(alcohol_status))

# Count the number of people with lung cancer for each smoking status
cancer_counts_smoking = [len([smoking for smoking in cancer_smoking if smoking == s]) for s in unique_smoking]

# Count the number of people with lung cancer for each alcohol status
cancer_counts_alcohol = [len([alcohol for alcohol in cancer_alcohol if alcohol == a]) for a in unique_alcohol]

# Set the width of the bars
bar_width = 0.35

# Set the positions of the bars on the x-axis
r1 = np.arange(len(unique_smoking))
r2 = [x + bar_width for x in r1]

# Create the figure and axes
fig, ax = plt.subplots()

# Create the double bar plot
ax.bar(r1, cancer_counts_smoking, color='b', width=bar_width, label='Smoking')
ax.bar(r2, cancer_counts_alcohol, color='g', width=bar_width, label='Alcohol')

# Set labels, title, and ticks
ax.set_xlabel('Status')
ax.set_ylabel('Number of People')
ax.set_title('Distribution of Lung Cancer by Smoking and Alcohol Status')
ax.set_xticks([r + bar_width / 2 for r in range(len(unique_smoking))])
ax.set_xticklabels(unique_smoking)

# Add a legend
ax.legend()

# Show the plot
plt.show()
fig.savefig('../public/lc_alts.png')
