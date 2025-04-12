import { Button } from "@/components/ui/button"
import Link from "next/link"

const ButtonHandler = () => {
  return (
    <div className="space-y-4">
      <Button type="submit" className="w-full bg-[#023E8A] hover:bg-[#023E8A]/90">
        S'inscrire
      </Button>

      <div className="text-center text-sm">
        <p>
          Vous avez déjà un compte ?{" "}
          <Link href="/auth/sign-in" className="font-medium text-[#3BCEAB] hover:text-[#3BCEAB]/80 transition-colors">
            Connectez-vous
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ButtonHandler
