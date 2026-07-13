import { PetJson } from '@/types/pet'
import { generatePetId, generateDisplayName, generateDescription } from '@/lib/utils/validation'

export function buildPetJson(): PetJson {
  const petId = generatePetId()
  return {
    id: petId,
    displayName: generateDisplayName(petId),
    description: generateDescription(petId),
    spritesheetPath: 'spritesheet.webp',
  }
}

export function buildInstallCommands(petId: string): {
  macos: string[]
  windows: string[]
} {
  return {
    macos: [
      `mkdir -p ~/.codex/pets/${petId}`,
      `unzip -o ${petId}.zip -d ~/.codex/pets/${petId}`,
    ],
    windows: [
      `New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\\.codex\\pets\\${petId}"`,
      `Expand-Archive -Path "${petId}.zip" -DestinationPath "$env:USERPROFILE\\.codex\\pets\\${petId}" -Force`,
    ],
  }
}
