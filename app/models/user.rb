class User < ApplicationRecord
	belongs_to :appointment

	def name
		return self.firstname.titleize + " " + self.lastname.titleize
	end
end
