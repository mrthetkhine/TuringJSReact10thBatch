import styles from './Profile.module.css';
export default function Profile({profile})//props.profile
{
    console.log('Profile created ',profile);
    let {name,imageUrl} = profile;//name=profile.name

    return (
        <div className={styles.profile}>
            <img
                className={styles['profile-image']}
                width={150}
                height={150}
                src={imageUrl}
                alt="Katherine Johnson"
            />
            <div style={{
                backgroundColor:'lightblue'
            }}>{name}</div>

        </div>

    )
}