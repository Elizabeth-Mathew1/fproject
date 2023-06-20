import pickle
import cv2
import matplotlib.pyplot as plt



img = cv2.imread("cell.png")
img=cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
equalizedImage = cv2.equalizeHist(img)
e, segmentedImage = cv2.threshold(equalizedImage, 128, 255, cv2.THRESH_TOZERO)

plt.figure(figsize=(20, 6))

ax1 = plt.subplot(1, 3, 1)
plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
ax1.set_title('Raw image')

ax2 = plt.subplot(1, 3, 2)
plt.imshow(cv2.cvtColor(equalizedImage, cv2.COLOR_BGR2RGB))
ax2.set_title('Equalized image')

ax3 = plt.subplot(1, 3, 3)
plt.imshow(cv2.cvtColor(segmentedImage, cv2.COLOR_BGR2RGB))
ax3.set_title('Equalized & Segmented image')

plt.suptitle('Pre-Processing CT images')

plt.show()

with open('model_pkl', 'rb') as file:
    MOBILENET = pickle.load(file)
predictions = MOBILENET.predict(segmentedImage)
print(predictions)