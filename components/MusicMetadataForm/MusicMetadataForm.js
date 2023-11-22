import { Box, Input, Text, Textarea } from 'degen'
import { MediaPicker } from '@components/MediaPicker.tsx'
import { useMusicMetadata } from 'music-metadata-ipfs'

const MusicMetadataForm = () => {
  const { metadata, setMetadata } = useMusicMetadata()

  return (
    <>
      <MediaPicker
        id="image"
        compact
        maxSize={100}
        accept="image/jpeg, image/png, image/webp, image/gif"
        label="Upload image"
        onError={console.error}
        onChange={(e) => setMetadata({ ...metadata, image: e })}
      />
      <Box marginBottom="12"></Box>
      <Input
        placeholder={metadata.name}
        label="Title"
        onChange={(e) => {
          const nameMetadata = {
            name: e.target.value,
            title: e.target.value,
          }
          setMetadata({ ...metadata, ...nameMetadata })
        }}
      />
      <Box marginBottom="12"></Box>
      <Textarea
        placeholder={metadata.description}
        label="Description"
        onChange={(e) => setMetadata({ ...metadata, description: e.target.value })}
      />
      <Box marginBottom="12"></Box>

      <Input
        placeholder={metadata.external_url}
        label="External URL (optional)"
        onChange={(e) => setMetadata({ ...metadata, external_url: e.target.value })}
      />
      
      <Box marginBottom="12"></Box>
    </>
  )
}

export default MusicMetadataForm
