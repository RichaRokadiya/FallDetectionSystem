from flask import Flask
import cv2
import mediapipe as mp
import math
import time
import telepot
import mongo
app = Flask(__name__)


@app.route('/')
def fall():
#     # Extract the values of tokenId and chatId from the request
#     token_id = request.args.get('tokenId')
#     chat_id = request.args.get('chatId')

#     # Do something with the token_id and chat_id values
#     result = my_function(token_id, chat_id)

#     # Return the result as a JSON response
#     return {'result': result}


# def my_function(token_id, chat_id):
    # Here is an example function that uses the token_id and chat_id values
    user=mongo.getUsers()
    latest=user.iloc[-1]
    token = latest.token  # telegram token richa


    # token = '6044978924:AAFYmrStr-QQ791-dc5YZDS2N3cqjh7TAuU' # dd
    # token = '5605381599:AAF3GNVHMTm6IbPt9RPTQ4SKL6F-2BG-K4I' # ss
    # receiver_id = 000000000000 # https://api.telegram.org/bot<TOKEN>/getUpdates
    receiver_id = latest.chatId
    # receiver_id = 1378127570 # dd
    # receiver_id = 1283646099 # ss

    bot = telepot.Bot(token)


    def angle_of_singleline(point1x, point1y, point2x, point2y, static_image_mode=True):
        """ Calculate angle of a single line """
        x_diff = point2x - point1x
        y_diff = point2y - point1y
        return math.degrees(math.atan2(y_diff, x_diff))


    mp_drawing = mp.solutions.drawing_utils
    mp_pose = mp.solutions.pose

    # Initialize the pose detector
    pose_detector = mp_pose.Pose(
        min_detection_confidence=0.5, min_tracking_confidence=0.5)

    # Set up the video capture
    cap = cv2.VideoCapture(0)
    # cap = cv2.VideoCapture(0)

    # Define some parameters for fall detection
    # If the angle between the hips and shoulders is less than this value, consider it a fall
    FALL_THRESHOLD = 20
    fall_count = 0
    is_falling = False

    while True:
        # Capture frame-by-frame
        ret, frame = cap.read()

        # Convert the frame to grayscale
        # gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        # Detect the pose
        results = pose_detector.process(frame)

        # Draw the pose landmarks on the frame
        if results.pose_landmarks:
            mp_drawing.draw_landmarks(
                frame, results.pose_landmarks, mp_pose.POSE_CONNECTIONS)

            # Get the landmarks for the hips, shoulders, and middle of the body
            knee_landmark = results.pose_landmarks.landmark[mp_pose.PoseLandmark.LEFT_KNEE]
            ankle_landmark = results.pose_landmarks.landmark[mp_pose.PoseLandmark.LEFT_ANKLE]
            # middle_landmark = results.pose_landmarks.landmark[mp_pose.PoseLandmark.LEFT_HIP]

            # Calculate the angle between the hips and shoulders
            # angle = abs(hip_landmark.y - shoulder_landmark.y)
            angle = angle_of_singleline(
                knee_landmark.x, knee_landmark.y, ankle_landmark.x, ankle_landmark.y)
            print(angle)
            # Check if the angle is less than the threshold
            if angle < FALL_THRESHOLD or angle > 180-FALL_THRESHOLD:
                # If we're not already falling, increment the fall count
                start_time = time.time()
                print(start_time)

                if (angle < 10 and angle > 0) or angle > 170:
                    end_time = time.time()
                    elapsed_time = end_time - start_time
                    if elapsed_time < 1.5:
                        fall_count += 1
                        is_falling = True
                        print("Fall")
                        bot.sendMessage(receiver_id, "Person Fall Detected")
                        # filename = "D:\\ws\\opencv\\yolo7\\yolov7\\savedImage.jpg"
                        # cv2.imwrite(filename)
                        # bot.sendPhoto(receiver_id, photo=open(filename, 'rb'))
                        # os.remove(filename)
                        break
            else:
                is_falling = False

        # Display the resulting frame
        cv2.imshow('Fall Detection', frame)

        # If the user presses 'q', exit the loop
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # Release the capture and destroy the window
    cap.release()

    cv2.destroyAllWindows()

    # return f'Token {token_id} is associated with Chat {chat_id}'


if __name__ == '__main__':
    app.run(debug=True)