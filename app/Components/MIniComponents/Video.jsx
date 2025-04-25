export function Video({src}) {
    return (
      <video width="1080px" height="1980px" controls  autoPlay muted playsInline>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
  