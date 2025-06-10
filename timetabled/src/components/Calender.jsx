import React from "react";
import Event from "./Events";
const Calendar = () => {

    return (
        <div className="Calender">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <td><Event event='Fancy Dinner 🎩' color='green' location='Maple & Ash'/></td>
                        <td><Event event='Morning Run 🏃' color='blue' location='Central Park' /></td>
                        <td></td>
                        <td></td>
                        <td><Event event='Coffee Date ☕' color='pink' location='Starbucks' /></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td><Event event='Yoga Class 🧘' color='blue' location='Yoga Studio' /></td>
                        <td><Event event='Breakfast 🍳' color='green' location='IHOP' /></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Event event='Dog Walk 🐕' color='pink' location='Riverside Park' /></td>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td><Event event=' Shopping 🛒' color='pink' location='Walmart' /></td>
                        <td></td>
                        <td><Event event='Study Group 📚' color='pink' location='Library' /></td>
                        <td></td>
                        <td></td>
                        <td><Event event='Laundry 🧺' color='green' location='Laundry Room' /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td><Event event='Brunch 🥞' color='green' location='Pancake House' /></td>
                        <td></td>
                        <td><Event event='Team Meeting 👥' color='blue' location='Office' /></td>
                        <td></td>
                        <td></td>
                        <td><Event event='Call Mom 📞' color='pink' location='Home' /></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td><Event event='Lunch 🍔' color='blue' location='Burger King' /></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Event event='Project Work 💻' color='green' location='Lab' /></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td><Event event='Nap 😴' color='pink' location='Dorm Room' /></td>
                        <td></td>
                        <td></td>
                        <td><Event event='Read Book 📖' color='blue' location='Library' /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td><Event event='Class Lecture 🏫' color='green' location='Room 101' /></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Event event='Bake Cookies 🍪' color='pink' location='Kitchen' /></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td><Event event='Guitar Practice 🎸' color='blue' location='Music Room' /></td>
                        <td></td>
                        <td></td>
                        <td><Event event='Swim 🏊' color='green' location='Community Pool' /></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td><Event event='Snack Time 🍎' color='pink' location='Cafeteria' /></td>
                        <td></td>
                        <td></td>
                        <td><Event event='Gym 🏋️' color='blue' location='Fitness Center' /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td><Event event='Dinner Prep 🍲' color='green' location='Home Kitchen' /></td>
                        <td></td>
                        <td></td>
                        <td><Event event='Walk 🚶' color='pink' location='Neighborhood' /></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}
export default Calendar;