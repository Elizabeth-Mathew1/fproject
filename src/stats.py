import gspread
import pandas as pd
import matplotlib.pyplot as plt

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