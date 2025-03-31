import styles from './Profile.module.css';
export default function Profile()
{
    console.log('Profile created');
    return (
        <div className={styles.profile}>
            <img
                className={styles['profile-image']}
                width={150}
                height={150}
                src="https://i.imgur.com/MK3eW3Am.jpg"
                alt="Katherine Johnson"
            />
            <div>Name</div>
            {1+2}
            {
               'Hello'.toUpperCase()
            }
        </div>

    )
}