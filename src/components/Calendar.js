import styles from './ProgramsPage.module.css';

function Calendar(){
    return (
        <div>
            <div className={styles.fullCalendar}>
                <iframe 
                    title="2024-2025 Schedule Calendar"
                    src="https://calendar.google.com/calendar/embed?src=b42daa27bc18ee75b1f28db4ba4fb3b9e4f411a0eab14947d2e632643b8f11c0%40group.calendar.google.com&ctz=America%2FToronto" 
                    >
                </iframe>
            </div>
            <div className={styles.mobileCalendar}>
                <iframe 
                    title="2024-2025 Schedule Agenda"
                    src="https://calendar.google.com/calendar/embed?src=b42daa27bc18ee75b1f28db4ba4fb3b9e4f411a0eab14947d2e632643b8f11c0%40group.calendar.google.com&ctz=America%2FToronto&mode=AGENDA" 
                    >
                </iframe>
            </div>
        </div>
    )
}
export default Calendar;