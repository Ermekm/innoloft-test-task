export function convertToEmbedLink(youtubeLink: string): string | null {
  // Regular expression to match YouTube video IDs from various URL formats
  const regex =
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|.*[?&]vi=|.*[?&]v%3D|.*[?&]vi%3D)|youtu\.be\/)([^"&?/\s]{11})/i;

  // Try to match the video ID from the input link
  const match = youtubeLink.match(regex);

  // eslint-disable-next-line
  if (match && match[1]) {
    // Extracted video ID
    const videoId = match[1];

    // Construct the embed link
    const embedLink = `https://www.youtube.com/embed/${videoId}`;

    return embedLink;
  } else {
    // If no match is found, return null or handle the error as needed
    return null;
  }
}
