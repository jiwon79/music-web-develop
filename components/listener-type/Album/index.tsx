import Border from "../Border";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import { Music } from "../../../utils/types";

interface props {
  music: Music
}

export default function Album({music}: props) {
  return (
    <div className={styles.container}>
      <Border innerWidth={10} outerWidth={140} className={styles.album}>
        <Image
          src={"/albums/"+music.title+".png"}
          alt={"album image"}
          width={120}
          height={120}
        />
      </Border>
      <div className={styles.detail}>
        <p className={styles.title}>{music.title}</p>
        <p className={styles.artist}>{music.artist}</p>
        <div className={styles.buttons}>
          <p>PLAY</p>
          <Link href={music.youtube || ''} passHref>
            <a target="_blank">
              <p>YOUTUBE</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
