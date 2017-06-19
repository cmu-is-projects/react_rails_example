class User < ApplicationRecord

	def name
		return self.firstname.titleize + " " + self.lastname.titleize
	end
end
